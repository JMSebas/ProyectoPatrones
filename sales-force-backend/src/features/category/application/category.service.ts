import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../application/dto/create-category.dto';
import { UpdateCategoryDto } from '../application/dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryServiceInterface } from './ports/category-repository';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService implements CategoryServiceInterface{
  constructor(readonly prismaService: PrismaService){}

async  create(createCategoryDto: CreateCategoryDto):Promise<Category> {
    return await this.prismaService.category.create({
      data: {
        name: createCategoryDto.name
      }
    });
  }

 async findAll(): Promise<Category[]>  {
    return await this.prismaService.category.findMany();
  }

 async  findOne(id: number): Promise<Category> {
    return await this.prismaService.category.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    return await this.prismaService.category.update({
      where:{
        id
      },
      data: updateCategoryDto
    });
  }

  async remove(id: number): Promise<Category> {
    return await this.prismaService.category.delete({
      where:{
        id
      }
    });
  }
}
