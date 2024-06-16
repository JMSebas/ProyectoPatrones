import { Module } from '@nestjs/common';
import { ChanceService } from '../application/chance.service';
import { ChanceController } from './chance.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ChanceController],
  providers: [ChanceService],
  imports: [PrismaModule]
})
export class ChanceModule {}
