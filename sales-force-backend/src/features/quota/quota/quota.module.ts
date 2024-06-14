import { Module } from '@nestjs/common';
import { QuotaService } from './quota.service';
import { QuotaController } from './quota.controller';

@Module({
  controllers: [QuotaController],
  providers: [QuotaService],
})
export class QuotaModule {}
