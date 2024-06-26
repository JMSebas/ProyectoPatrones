import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionInterfaceService } from './ports/transaction-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Transaction } from '@prisma/client';
import { CreateItemDto } from 'src/features/item/application/dto/create-item.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class TransactionService implements TransactionInterfaceService {
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

    await this.createTask(transactionData.total, transactionData.delegationId)


    return await this.prismaService.transaction.create({
      data: {
        ...transactionData,
        items: {
          create: items
        }
      }
    });
  }


  async createTask(total: number, delegation: number) {
    if (total <= 200 && total !== 0) {
      const now = new Date();
      const future = new Date();

      const futureMonth = future.getMonth();
      const currentMonth = now.getMonth();

      let nextFutureMonth = futureMonth + 2;
      let nextMonth = currentMonth + 1;

      if (nextMonth >= 12) {
        nextMonth = 0;
        now.setFullYear(now.getFullYear() + 1);
      }
      if (nextFutureMonth >= 12) {
        nextFutureMonth = 0;
        future.setFullYear(future.getFullYear() + 1);

      }

      future.setMonth(nextFutureMonth)
      now.setMonth(nextMonth);
      await this.prismaService.task.create({
        data: {
          date: now,
          state: 'Pending',
          type: 'LLamada',
          estimatedTime: future,
          delegationId: delegation,

          comments: {
            create: {
              content: 'Llamar al cliente'
            }
          }
        }
      })
    }
    else if (total > 200 && total !== 0) {
      const now = new Date();
      const future = new Date();

      const futureMonth = future.getMonth();
      const currentMonth = now.getMonth();

      let nextFutureMonth = futureMonth + 4;
      let nextMonth = currentMonth + 3;

      if (nextMonth >= 12) {
        nextMonth = 0;
        now.setFullYear(now.getFullYear() + 1);
      }
      if (nextFutureMonth >= 12) {
        nextFutureMonth = 0;
        future.setFullYear(future.getFullYear() + 1);

      }

      future.setMonth(nextFutureMonth)
      now.setMonth(nextMonth);
      await this.prismaService.task.create({
        data: {
          date: now,
          state: 'Pending',
          type: 'Visita',
          estimatedTime: future,
          delegationId: delegation,

          comments: {
            create: {
              content: 'Visitar al cliente'
            }
          }
        }
      })

    }

  }

  async findAll(): Promise<Transaction[]> {
    return await this.prismaService.transaction.findMany({
      select: {
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
      select: {
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

  async cancelledTransaction(id: number) {
    return await this.prismaService.transaction.update({
      where: {
        id
      },
      data: {
        status: 'Cancelled'
      }
    })
  }



  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    const existingTransaction = await this.prismaService.transaction.findUnique({
      where: { id },
      include: { items: true }
    });

    if (!existingTransaction) {
      throw new NotFoundException(`Transaction with id ${id} not found`);
    }

    const transactionData = {
      date: updateTransactionDto.date,
      type: updateTransactionDto.type,
      paymentMethodId: updateTransactionDto.paymentMethodId,
      delegationId: updateTransactionDto.delegationId,
      total: 0.00,
    };

    const existingItems = existingTransaction.items;
    const newItems = updateTransactionDto.items?.map((createItemDto: CreateItemDto) => ({
      quantity: createItemDto.quantity,
      discount: createItemDto.discount,
      productId: createItemDto.productId,
    }));

    const allItems = [...existingItems, ...newItems];

    const productPrices = await this.prismaService.product.findMany({
      where: {
        id: {
          in: allItems.map(item => item.productId)
        }
      },
      select: {
        id: true,
        name: true,
        price: true,
        stock: true
      }
    });

    allItems.map((item) => {
      if (productPrices.length > 0) {
        const productPrice = productPrices.find(product => product.id === item.productId);
        if (productPrice) {
          transactionData.total += (productPrice.price.toNumber() * item.quantity) - (item.discount as number)
        }
      }
    });


    return await this.prismaService.transaction.update({
      where: { id },
      data: {
        ...transactionData,
        items: {
          deleteMany: { transactionId: id },
          create: newItems
        }
      }
    });
  }

  async addItem(transactionId: number, createItemDto: CreateItemDto): Promise<void> {
    const transaction = await this.prismaService.transaction.findUnique({
      where: { id: transactionId },
      include: { items: true }
    });

    if (!transaction) {
      throw new NotFoundException(`Transaction with id ${transactionId} not found`);
    }

    const productPrice = await this.prismaService.product.findUnique({
      where: { id: createItemDto.productId },
      select: { price: true }
    });

    if (!productPrice) {
      throw new NotFoundException(`Product with id ${createItemDto.productId} not found`);
    }

    const total = (transaction.total).toNumber() + (productPrice.price.toNumber() * createItemDto.quantity) - createItemDto.discount;

    await this.prismaService.transaction.update({
      where: { id: transactionId },
      data: {
        total,
        items: {
          create: createItemDto,
        }
      }
    });
  }

  async removeItem(transactionId: number, itemId: number): Promise<void> {
    const item = await this.prismaService.item.findUnique({
      where: { id: itemId },
      include: { transaction: true, product: true }
    });

    if (!item) {
      throw new NotFoundException(`Item with id ${itemId} not found`);
    }

    const total = (item.transaction.total).toNumber() - (item.product.price.toNumber() * item.quantity) + (item.discount).toNumber();

    await this.prismaService.transaction.update({
      where: { id: transactionId },
      data: {
        total,
        items: {
          delete: { id: itemId },
        }
      }
    });
  }


  async remove(id: number) {
    await this.prismaService.item.deleteMany({
      where:
      {
        transactionId: id
      }
    });

    return await this.prismaService.transaction.delete({
      where: {
        id
      }
    });
  }


}
