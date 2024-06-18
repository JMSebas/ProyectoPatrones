import { Module } from '@nestjs/common';
import { QuotaService } from '../application/quota.service'; 
import { QuotaController } from './quota.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [QuotaController],
  providers: [QuotaService],
  imports: [PrismaModule]
})
export class QuotaModule {}
