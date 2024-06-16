import { Module } from '@nestjs/common';
import { ConsumerService } from '../application/consumer.service'; 
import { ConsumerController } from './consumer.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ConsumerController],
  providers: [ConsumerService],
  imports: [PrismaModule]
})
export class ConsumerModule {}
