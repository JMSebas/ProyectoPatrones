import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  controllers: [CategoryController]
})
export class CategoryModule {}
