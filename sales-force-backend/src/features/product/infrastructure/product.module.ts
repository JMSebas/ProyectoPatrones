import { Module } from '@nestjs/common';
import { ProductService } from '../application/product.service'; 
import { ProductController } from './product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
