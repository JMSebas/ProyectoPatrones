import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionInterfaceService } from './ports/transaction-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Transaction } from '@prisma/client';
import { CreateItemDto } from 'src/features/item/application/dto/create-item.dto';

@Injectable()
export class TransactionService implements TransactionInterfaceService{
constructor(private readonly prismaService: PrismaService) {
}


  async create(createTransactionDto: CreateTransactionDto) {
    const transactionData = {
      date: createTransactionDto.date,
      type: createTransactionDto.type,
      status: 'Pending',
      total: 0,
      paymentMethodId: createTransactionDto.paymentMethodId,
      delegationId: createTransactionDto.delegationId
    }

    
    const items = createTransactionDto.items?.map((createItemDto: CreateItemDto)=>({
      quantity: createItemDto.quantity,
      discount: createItemDto.discount,
      productId: createItemDto.productId,
      serviceId: createItemDto.serviceId
    }));

    return await this.prismaService.transaction.create({
      data:{
        ...transactionData,
        items: {
        create: items
        }
      }
    });
  }

  async findAll(): Promise<Transaction[]> {
    return await this.prismaService.transaction.findMany({
      select:{
        id: true,
        date: true,
        type: true,
        status: true,
        total: true,
        paymentMethodId: true,
        delegationId: true,
        items: true,
        createdAt: true,
        updateAt: true
      }
    });
  }

  async findOne(id: number): Promise<Transaction | null> {
    return await this.prismaService.transaction.findUnique({
      where: {
        id
      },
      select:{
        id: true,
        date: true,
        type: true,
        status: true,
        total: true,
        paymentMethodId: true,
        delegationId: true,
        items: true,
        createdAt: true,
        updateAt: true
      }
    });;
  }
  async changeState(id: number): Promise<Transaction> {
      return await this.prismaService.transaction.update({
        where: {
          id
        },
        data: {
          status: 'Completed'
        }
      })
  }

  async remove(id: number) {
    return await this.prismaService.transaction.delete({
      where:{
        id
      }
    });
  }


}
