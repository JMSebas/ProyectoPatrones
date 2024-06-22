import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '../application/dto/create-permission.dto';
import { UpdatePermissionDto } from '../application/dto/update-permission.dto';
import { PermissionInterfaceService } from './ports/permission-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Permission } from '@prisma/client';

@Injectable()
export class PermissionService implements PermissionInterfaceService{
constructor(readonly prismaService: PrismaService){}

 async create(createPermissionDto: CreatePermissionDto):Promise<Permission> {
    return await this.prismaService.permission.create({
      data:{
        employeeId: createPermissionDto.employeeId,
        moduleId: createPermissionDto.moduleId
      }
    });
  }

 async findAll():Promise<Permission[]> {
    return await this.prismaService.permission.findMany();
  }

  async findOne(id: number):Promise<Permission | null> {
    return await this.prismaService.permission.findUnique({
      where:{
        id
      }
    });
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) :Promise<Permission>{
    return await this.prismaService.permission.update({
      where:{
        id
      },
      data: updatePermissionDto
    });
  }

  async remove(id: number):Promise<Permission> {
    return await this.prismaService.permission.delete({
      where:{
        id
      }
    });
  }
}
