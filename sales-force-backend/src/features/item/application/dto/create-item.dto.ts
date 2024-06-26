import { IsInt, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateItemDto {
    @IsNotEmpty()
    @IsNumber()
    discount: number;

    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @IsInt()
    @IsOptional()
    productId: number;


    // @IsInt()
    // @IsOptional()
    // serviceId: number;




}
