import { Module } from '@nestjs/common';
import { QuotaController } from './controllers/quota/quota.controller';

@Module({
  controllers: [QuotaController]
})
export class QuotaModule {}
