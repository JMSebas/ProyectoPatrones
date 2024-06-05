import { Module } from '@nestjs/common';
import { PaymentMethodController } from './controllers/payment-method/payment-method.controller';

@Module({
  controllers: [PaymentMethodController]
})
export class PaymentMethodModule {}
