import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {

  constructor(private readonly prismaService: PrismaService){}

 async  create(createTaskDto: CreateTaskDto) {
    return await this.prismaService.task.create({
      data: {
        date: createTaskDto.date,
        state: createTaskDto.state,
        type: createTaskDto.type,
        estimatedTime: createTaskDto.estimatedTime,
        delegationId: createTaskDto.delegationId,
      }
      
    });
  }

  async findAll() {
    return `This action returns all task`;
  }

 async findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
