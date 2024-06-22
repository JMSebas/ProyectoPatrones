import { Injectable } from '@nestjs/common';
import { CreateDelegationDto } from '../application/dto/create-delegation.dto';
import { UpdateDelegationDto } from '../application/dto/update-delegation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DelegationInterfaceService } from './ports/delegation-repository';
import { Delegation } from '@prisma/client';

@Injectable()
export class DelegationService implements DelegationInterfaceService{
  constructor(readonly prismaService: PrismaService){}


  async create(createDelegationDto: CreateDelegationDto): Promise<Delegation> {
    return await this.prismaService.delegation.create({
      data:{
        employeeId: createDelegationDto.employeeId,
        consumerId: createDelegationDto.consumerId
      }
    });
  }

  async findAll(): Promise<Delegation[]> {
    return await this.prismaService.delegation.findMany();
  }

  async findOne(id: number): Promise<Delegation>  {
    return await this.prismaService.delegation.findUnique({
      where:{
        id
      }
    });
  }

 async  update(id: number, updateDelegationDto: UpdateDelegationDto): Promise<Delegation> {
    return await this.prismaService.delegation.update({
      where: {
        id
      },
      data: updateDelegationDto
    });
  }

 async remove(id: number): Promise<Delegation> {
    return await this.prismaService.delegation.delete({
      where: {
        id
      }
    });
  }
}
