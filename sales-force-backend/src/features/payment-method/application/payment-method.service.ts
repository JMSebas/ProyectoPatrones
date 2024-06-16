import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PaymentMethodServiceInterface } from './ports/payment-repository';
import { PaymentMethod } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentMethodService implements PaymentMethodServiceInterface{
constructor(readonly prismaService: PrismaService){}

  async create(createPaymentMethodDto: CreatePaymentMethodDto): Promise<PaymentMethod> {
    return await this.prismaService.paymentMethod.create({
      data:{
        name: createPaymentMethodDto.name,
        taxes: createPaymentMethodDto.taxes
      }
    });
  }

  async findAll(): Promise<PaymentMethod[]> {
    return await this.prismaService.paymentMethod.findMany();
  }

  async findOne(id: number): Promise<PaymentMethod | null> {
    return await  this.prismaService.paymentMethod.findUnique({
      where: {
        id
      }
    });
  }

 async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto): Promise<PaymentMethod> {
    return await  this.prismaService.paymentMethod.update({
      where:{
        id
      },
      data: updatePaymentMethodDto
    });
  }

 async  remove(id: number): Promise<PaymentMethod> {
    return await this.prismaService.paymentMethod.delete({
      where:{
        id
      }
    });
  }
}
