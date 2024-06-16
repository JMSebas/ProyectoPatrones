import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {

  constructor(private readonly prismaService: PrismaService){}

 async  create(createTaskDto: CreateTaskDto): Promise<Task> {
  const comments =  createTaskDto.comments?.map((commentDto) => ({
    taskId: commentDto.taskId,
    content: commentDto.content,
  }));

    return await this.prismaService.task.create({
      data: {
        date: createTaskDto.date,
        state: createTaskDto.state,
        type: createTaskDto.type,
        estimatedTime: createTaskDto.estimatedTime,
        delegationId: createTaskDto.delegationId,
        comments: {
          create: comments
        }
      }
      
    });
  }

  async findAll(): Promise<Task []> {
    return this.prismaService.task.findMany();
  }

 async findOne(id: number): Promise<Task> {
    return this.prismaService.task.findUnique({
      where:{
        id
      }
    });
  }


  // async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
  //   return await this.prismaService.task.update({
  //     where:{
  //       id
  //     },
  //     data: updateTaskDto
  //   });
  // }

  async remove(id: number): Promise<Task> {
    return await this.prismaService.task.delete({
      where:{
        id
      }
    });
  }
}
