import { Decimal } from "@prisma/client/runtime/library";
import { IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsDecimal()
    @IsNotEmpty()
    taxes: Decimal;

}
