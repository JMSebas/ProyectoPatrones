import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { CreateCommentDto } from 'src/features/comment/application/dto/create-comment.dto';

@Injectable()
export class TaskService {

  constructor(private readonly prismaService: PrismaService){}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const taskData = {
      date: createTaskDto.date,
      state: createTaskDto.state,
      type: createTaskDto.type,
      estimatedTime: createTaskDto.estimatedTime,
      delegationId: createTaskDto.delegationId,
    };

    const comments = createTaskDto.comments?.map((commentDto: CreateCommentDto) => ({
      content: commentDto.content,
    }));

    return await this.prismaService.task.create({
      data: {
        ...taskData,
        comments: {
          create: comments,
        },
      },
    });


  }

  async findAll(): Promise<Task []> {
    return this.prismaService.task.findMany({
      select:{
        id: true,
        date: true,
        state:true,
        type: true,
        estimatedTime:true,
        delegationId: true,
        comments: true,
        createdAt: true,
        updateAt: true
      }
    });
  }

 async findOne(id: number): Promise<Task> {
    return this.prismaService.task.findUnique({
      where:{
        id
      },
      select:{
        id: true,
        date: true,
        state:true,
        type: true,
        estimatedTime:true,
        delegationId: true,
        comments: true,
        createdAt: true,
        updateAt: true
      }
    });
  }

  


  // async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
  //   return await this.prismaService.task.update({
  //     where:{
  //       id
  //     },
  //     data: ...updateTaskDto,
  //     comments: {
  //       updateM
  //     }
  //   });
  // }

  async remove(id: number): Promise<Task> {
    await this.prismaService.comment.deleteMany({
      where:{
        taskId: id
      }
    });
    return await this.prismaService.task.delete({
      where:{
        id
      }
    });
  }
}
