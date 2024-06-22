
import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateItemDto } from "src/features/item/application/dto/create-item.dto";
import { Product } from "src/features/product/domain/product.entity";

export class CreateTransactionDto {
    @IsNotEmpty()
    @Type(()=> Date)
    date: Date;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsInt()
    paymentMethodId: number;

    @IsNotEmpty()
    @IsInt()
    delegationId: number;


    @ValidateNested({ each: true })
    @Type(() => CreateItemDto)
    @IsOptional()
    items: CreateItemDto[]


}
