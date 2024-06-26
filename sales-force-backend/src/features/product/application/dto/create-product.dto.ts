
import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    brand: string;


    @IsInt()
    @IsNotEmpty()
    stock: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;


    @IsNotEmpty()
    @IsString()
    description: string;


    @IsString()
    @IsNotEmpty()
    category: string;


}
