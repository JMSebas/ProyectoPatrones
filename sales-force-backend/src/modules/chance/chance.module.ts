import { Module } from '@nestjs/common';
import { ChanceController } from './controllers/chance/chance.controller';

@Module({
  controllers: [ChanceController]
})
export class ChanceModule {}
