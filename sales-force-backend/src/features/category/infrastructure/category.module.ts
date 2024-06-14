import { Module } from '@nestjs/common';
import { CategoryService } from '../application/category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports:[PrismaModule]
})
export class CategoryModule {}
