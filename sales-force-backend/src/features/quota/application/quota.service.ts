import { Injectable } from '@nestjs/common';
import { CreateQuotaDto } from '../application/dto/create-quota.dto';
import { UpdateQuotaDto } from '../application/dto/update-quota.dto';
import { QuotaInterfaceService } from './ports/quota-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Quota } from '@prisma/client';

@Injectable()
export class QuotaService implements QuotaInterfaceService {

constructor(readonly prismaService: PrismaService){}

 async  create(createQuotaDto: CreateQuotaDto): Promise<Quota> {
    return await this.prismaService.quota.create({
      data:{
        startDate: createQuotaDto.startDate,
        endDate: createQuotaDto.endDate,
        amout: createQuotaDto.amout,
        comission: createQuotaDto.comission,
        achieved: createQuotaDto.achieved,
        employeeId: createQuotaDto.employeeId

      }
    });
  }

  async findAll(): Promise<Quota []> {
    return await this.prismaService.quota.findMany();
  }

  async findOne(id: number): Promise<Quota | null> {
    return await this.prismaService.quota.findUnique({
      where:{
        id
      }
    });
  }

  async update(id: number, updateQuotaDto: UpdateQuotaDto): Promise<Quota> {
    return await this.prismaService.quota.update({
      where:{
        id
      },
      data: updateQuotaDto
    });
  }

 async  remove(id: number): Promise<Quota>{
    return await this.prismaService.quota.delete({
      where: {
        id
      }
    });
  }
}
