import { Module } from '@nestjs/common';
import { ConsumerController } from './controllers/consumer/consumer.controller';

@Module({
  controllers: [ConsumerController]
})
export class ConsumerModule {}
