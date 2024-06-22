import { Module } from '@nestjs/common';
import { DelegationService } from '../application/delegation.service'; 
import { DelegationController } from './delegation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DelegationController],
  providers: [DelegationService],
  imports: [PrismaModule]
})
export class DelegationModule {}
