import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { TaskService } from '../application/task.service';
import { CreateTaskDto } from '../application/dto/create-task.dto';
import { UpdateTaskDto } from '../application/dto/update-task.dto';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/guard/role.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';
@ApiCookieAuth()
@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  
  @Put('change/:id')
  changeState(@Param('id') id: string){
    return this.taskService.changeState(+id)

  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
