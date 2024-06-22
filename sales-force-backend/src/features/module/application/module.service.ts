import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto'; 
import { UpdateModuleDto } from './dto/update-module.dto'; 
import { ModuleInterfaceService } from './ports/module-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@prisma/client';

@Injectable()
export class ModuleService implements ModuleInterfaceService {

  constructor(readonly prismaService: PrismaService){}

  async create(createModuleDto: CreateModuleDto): Promise<Module> {
    return await this.prismaService.module.create({
      data:{
        name: createModuleDto.name,
        description: createModuleDto.description
      }
    });
  }

  async findAll(): Promise<Module[]> {
    return await this.prismaService.module.findMany();
  }

  async findOne(id: number): Promise<Module | null> {
    return await this.prismaService.module.findUnique({
      where:{
        id
      }
    });
  }

 async  update(id: number, updateModuleDto: UpdateModuleDto): Promise<Module> {
    return await this.prismaService.module.update({
      where:{
        id
      },
      data: updateModuleDto
    });
  }

  async remove(id: number) : Promise<Module>{
    return await this.prismaService.module.delete({
      where: {
        id
      }
    });
  }
}
