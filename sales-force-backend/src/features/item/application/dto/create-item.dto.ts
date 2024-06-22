import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateItemDto {
    @IsNotEmpty()
    @IsNumber()
    discount: number;

    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @IsInt()
    productId: number;


    @IsInt()
    serviceId: number;




}
