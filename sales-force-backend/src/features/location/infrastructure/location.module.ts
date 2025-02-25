import { Module } from '@nestjs/common';
import { LocationService } from '../application/location.service'; 
import { LocationController } from './location.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LocationController],
  providers: [LocationService],
  imports: [PrismaModule]
})
export class LocationModule {}
