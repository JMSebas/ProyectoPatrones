import { Injectable } from '@nestjs/common';
import { CreateChanceDto } from './dto/create-chance.dto';
import { UpdateChanceDto } from './dto/update-chance.dto';
import { ChanceInterfaceService } from './ports/chance-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Chance } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class ChanceService implements ChanceInterfaceService {
  constructor(readonly prismaService: PrismaService) { }

  async create(createChanceDto: CreateChanceDto): Promise<Chance> {
    return await this.prismaService.chance.create({
      data: {
        amount: createChanceDto.amount,
        status: 'Pending',
        date: createChanceDto.date,
        delegationId: createChanceDto.delegationId


      }
    });
  }

  async findAll(): Promise<Chance[]> {
    return await this.prismaService.chance.findMany({
      include: {
        delegation: {
          select: {
            id: true,
            employeeId: true,
            consumerId: true,
            employee: {
              select: {
                id: true,
                username: true,
                role: true,
                person: {
                  select: {
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
                person: {
                  select: {
                    dni: true,
                    firstName: true,
                    lastName: true
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  async findOne(id: number): Promise<Chance | null> {
    return await this.prismaService.chance.findUnique({
      where: {
        id
      }
    });
  }
  async changeState(id: number): Promise<Chance> {
    return await this.prismaService.chance.update({
      where: {
        id
      },
      data: {
        status: 'Completed'
      }
    })

  }
  async update(id: number, updateChanceDto: UpdateChanceDto): Promise<Chance> {
    return await this.prismaService.chance.update({
      where: {
        id
      },
      data: updateChanceDto
    });
  }

  async remove(id: number): Promise<Chance> {
    return await this.prismaService.chance.delete({
      where: {
        id
      }
    });
  }
}
