import { Module } from '@nestjs/common';
import { BrandController } from './controllers/brand/brand.controller';

@Module({
  controllers: [BrandController]
})
export class BrandModule {}
