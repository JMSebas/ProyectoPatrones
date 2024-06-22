import { Category } from "@prisma/client";
import { UpdateCategoryDto } from "../dto/update-category.dto";
import { CreateCategoryDto } from "../dto/create-category.dto";

export interface CategoryServiceInterface {
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category | null>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: number): Promise<Category>;
  }
  