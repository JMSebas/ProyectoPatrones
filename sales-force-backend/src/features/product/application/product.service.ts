import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../application/dto/create-product.dto';
import { UpdateProductDto } from '../application/dto/update-product.dto';
import { ProductInterfaceService } from './ports/product-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService  implements ProductInterfaceService{
constructor(readonly prismaService: PrismaService){

}
   
  async create(createProductDto: CreateProductDto):Promise<Product> {
    return await  this.prismaService.product.create({
      data:{
        name: createProductDto.name,
        brand: createProductDto.brand,
        stock: createProductDto.stock,
        price: createProductDto.price,
        description: createProductDto.description,
        categoryId: createProductDto.categoryId

      }
    });
  }

async  findAll():Promise<Product[]> {
    return await this.prismaService.product.findMany();
  }

  async findOne(id: number):Promise<Product | null> {
    return await this.prismaService.product.findUnique({
      where:{
        id
      }
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<Product> {
    return await this.prismaService.product.update({
      where:{
        id
      },
      data: updateProductDto
    });
  }

  async remove(id: number):Promise<Product> {
    return await this.prismaService.product.delete({
      where:{
        id
      }
    });
  }
}
