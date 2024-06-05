import { Module } from '@nestjs/common';
import { LocationController } from './controllers/location/location.controller';

@Module({
  controllers: [LocationController]
})
export class LocationModule {}
