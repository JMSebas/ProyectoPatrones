
import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePaymentMethodDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    taxes: number;

}
