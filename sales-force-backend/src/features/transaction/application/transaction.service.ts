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


async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
  const transactionData = {
    date: createTransactionDto.date,
    type: createTransactionDto.type,
    status: 'Pending',
    total: 0.00,
    paymentMethodId: createTransactionDto.paymentMethodId,
    delegationId: createTransactionDto.delegationId
  }

  const items = createTransactionDto.items?.map((createItemDto: CreateItemDto) => ({
    quantity: createItemDto.quantity,
    discount: createItemDto.discount,
    productId: createItemDto.productId,

  }));

  const productPrices = await this.prismaService.product.findMany({
    where: {
      id: {
        in: items.map(item => item.productId)
      }
    },
    select: {
      id: true,
      name: true,
      price: true,
      stock: true
    }
  });

  items.map((item) => {
    if (productPrices.length > 0) {
      const productPrice = productPrices.find(product => product.id === item.productId);
      if (productPrice) {
        transactionData.total += (productPrice.price.toNumber() * item.quantity) - item.discount
      }

    }

  });
  return await this.prismaService.transaction.create({
    data: {
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
