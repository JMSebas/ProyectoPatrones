import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quota, Task } from '@prisma/client';
import { CreateCommentDto } from 'src/features/comment/application/dto/create-comment.dto';
import { TaskInterfaceService } from './ports/task-repository';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class TaskService implements TaskInterfaceService {

  constructor(private readonly prismaService: PrismaService, private readonly eventEmitter: EventEmitter2) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task | { message: string }> {
    const taskData = {
      date: createTaskDto.date,
      state: 'Pending',
      type: createTaskDto.type,
      estimatedTime: createTaskDto.estimatedTime,
      delegationId: createTaskDto.delegationId,
    };


    const result = await this.verifDate(createTaskDto);

    if (result) {
      throw new BadRequestException('Conflicto con el horario')
    }

    const employeeId = await this.prismaService.delegation.findUnique({
      where: {
        id: createTaskDto.delegationId
      }
    })


    this.addChance(employeeId.employeeId, createTaskDto.type, createTaskDto.delegationId);


    return await this.prismaService.task.create({
      data: {
        ...taskData,
        comments: {
          create: {
            content: createTaskDto.comment.content
          },
        },
      },
    });


  }


  async addChance(employeeId: number, reason: string, delegationId: number) {
    if (reason === 'Llamada') {
      const quota = await this.getLastQuota(employeeId);
      if (quota === null) {
        return { message: 'No se ha encontrado cuotas' }
      }
      
      const amountChance = quota.amout.toNumber() / 100;
      const now = new Date();
      const currentMonth = now.getMonth();
      let nextMonth = currentMonth + 1;
      if (nextMonth === 12) {
        nextMonth = 0;
        now.setFullYear(now.getFullYear() + 1);
      }
      now.setMonth(nextMonth);

      await this.prismaService.chance.create({
        data: {
          amount: amountChance,
          status: 'Pending',
          date: now,
          delegationId: delegationId

        }
      });

    }

  }

  async getLastQuota(employeeId: number): Promise<Quota> {
    const lastQuota = await this.prismaService.quota.findFirst({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        employeeId: employeeId
      }
    });

    return lastQuota
  }

  async verifDate(createTaskDto: CreateTaskDto) {
    const dates = await this.prismaService.task.findMany({
      select: {
        date: true,
        estimatedTime: true,
      },
      where: {
        state: 'Pending',
        delegationId: createTaskDto.delegationId,
      },
    });

    for (const date of dates) {
      if (createTaskDto.date >= date.date &&  createTaskDto.date <= date.estimatedTime ||
       createTaskDto.estimatedTime <= createTaskDto.date
      ) {
        return true;
      }
    }

    return false;
  }

  async findAll(): Promise<Task[]> {
    return this.prismaService.task.findMany({
      select: {
        id: true,
        date: true,
        state: true,
        type: true,
        estimatedTime: true,
        delegationId: true,
        comments: true,
        createdAt: true,
        updateAt: true
      }
    });
  }

  async findOne(id: number): Promise<Task> {
    return this.prismaService.task.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        date: true,
        state: true,
        type: true,
        estimatedTime: true,
        delegationId: true,
        comments: true,
        createdAt: true,
        updateAt: true
      }
    });
  }


  async changeState(id: number): Promise<Task> {

    await this.prismaService.task.update({
      where: {
        id
      },
      data: {
        state: 'Completed'
      }
    });

    return this.findOne(id)


  }

  async remove(id: number): Promise<Task> {
    await this.prismaService.comment.deleteMany({
      where: {
        taskId: id
      }
    });


    return await this.prismaService.task.delete({
      where: {
        id
      }
    });
  }
}
