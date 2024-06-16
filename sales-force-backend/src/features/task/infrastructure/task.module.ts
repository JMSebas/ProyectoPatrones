import { Module } from '@nestjs/common';
import { TaskService } from '../application/task.service';
import { TaskController } from './task.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports:[PrismaModule, JwtModule]
})
export class TaskModule {}
