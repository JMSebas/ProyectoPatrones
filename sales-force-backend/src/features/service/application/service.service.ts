import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from '../application/dto/create-service.dto';
import { UpdateServiceDto } from '../application/dto/update-service.dto';
import { ServiceInterfaceService } from './ports/service-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Service } from '@prisma/client';

@Injectable()
export class ServiceService implements ServiceInterfaceService{
constructor(readonly prismaService: PrismaService){}

  async create(createServiceDto: CreateServiceDto):Promise<Service> {
    return await this.prismaService.service.create({
      data:{
        name: createServiceDto.name,
        description: createServiceDto.description,
        isAvaliable: createServiceDto.isAvaliable,
        priceHour: createServiceDto.priceHour
      }
    });
  }

 async  findAll():Promise<Service[]> {
    return await this.prismaService.service.findMany();
  }

  async findOne(id: number):Promise<Service | null> {
    return await this.prismaService.service.findUnique({
      where:{
        id
      }
    });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto): Promise<Service> {
    return await this.prismaService.service.update({
      where:{
        id
      },
      data: updateServiceDto
    });
  }

  async remove(id: number): Promise<Service> {
    return await this.prismaService.service.delete({
      where:{
        id
      }
    });
  }
}
