import { Module } from '@nestjs/common';
import { PaymentMethodService } from '../application/payment-method.service'; 
import { PaymentMethodController } from './payment-method.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
  imports: [PrismaModule]
})
export class PaymentMethodModule {}
