import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from '../application/dto/create-location.dto';
import { UpdateLocationDto } from '../application/dto/update-location.dto';
import { LocationInterfaceService } from './ports/location-interface';
import { Location } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationService implements LocationInterfaceService {
  constructor(readonly prismaService: PrismaService){}

  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return await this.prismaService.location.create({
      data:{
        name: createLocationDto.name
      }
    });
  }

 async findAll(): Promise<Location[]> {
    return await this.prismaService.location.findMany();
  }

  async findOne(id: number): Promise<Location | null> {
    return await this.prismaService.location.findUnique({
      where:{
        id
      }
    });
  }

 async  update(id: number, updateLocationDto: UpdateLocationDto):Promise<Location> {
    return await  this.prismaService.location.update({
      where:{
        id
      },
      data: updateLocationDto
    });
  }

 async  remove(id: number): Promise<Location> {
    return await this.prismaService.location.delete({
      where:{
        id
      }
    });
  }
}
