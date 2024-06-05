import { Module } from '@nestjs/common';
import { DelegationController } from './controllers/delegation/delegation.controller';

@Module({
  controllers: [DelegationController]
})
export class DelegationModule {}
