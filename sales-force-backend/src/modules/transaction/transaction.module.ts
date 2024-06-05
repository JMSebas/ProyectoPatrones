import { Module } from '@nestjs/common';
import { TransactionController } from './controllers/transaction/transaction.controller';

@Module({
  controllers: [TransactionController]
})
export class TransactionModule {}
