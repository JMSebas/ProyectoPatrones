import { Module } from '@nestjs/common';
import { BrandService } from '../application/services/brand.service'; 
import { BrandController } from './controllers/brand.controller'; 

@Module({
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
