import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDelegationDto } from '../application/dto/create-delegation.dto';
import { UpdateDelegationDto } from '../application/dto/update-delegation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { DelegationInterfaceService } from './ports/delegation-repository';
import { Delegation } from '@prisma/client';

@Injectable()
export class DelegationService implements DelegationInterfaceService{
  constructor(readonly prismaService: PrismaService){}


  async create(createDelegationDto: CreateDelegationDto): Promise<Delegation | { message: string}> {

    const personsLocation = await this.prismaService.person.findMany({
      where:{
        OR:[
          {employee: {id: createDelegationDto.employeeId}},
          {consumer:{id: createDelegationDto.consumerId}}
        ]
      },
      select: {
        locationId: true
      }
    }) ;

    const [employeeLocationId, consumerLocationId] = personsLocation.map(location => location.locationId);


    if( employeeLocationId !== consumerLocationId){
      throw new BadRequestException('Locaciones diferentes')
    }
   
    return await this.prismaService.delegation.create({
      data:{
        employeeId: createDelegationDto.employeeId,
        consumerId: createDelegationDto.consumerId
      }
    });
  }


  async findAll(): Promise<Delegation[]> {
    return await this.prismaService.delegation.findMany({
      include:{
        employee: {
          select: {
            id: true,
            username: true,
            role: true,
            person:  {
                select:{
                  dni: true,
                  firstName: true,
                  lastName: true
                }
              }
            }
          },
          consumer: {
            select: {
              id: true,
              isCustomer: true,
              type: true,
              person:  {
                  select:{
                    dni: true,
                    firstName: true,
                    lastName: true
                  }
                }
              }
            }     
        }
    });
  }


  async findOne(id: number): Promise<Delegation>  {
    return await this.prismaService.delegation.findUnique({
      where:{
        id
      },
        include:{
          employee: {
            select: {
              id: true,
              username: true,
              role: true,
              person:  {
                  select:{
                    dni: true,
                    firstName: true,
                    lastName: true
                  }
                }
              }
            },
            consumer: {
              select: {
                id: true,
                isCustomer: true,
                type: true,
                person:  {
                    select:{
                      dni: true,
                      firstName: true,
                      lastName: true
                    }
                  }
                }
              }     
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
