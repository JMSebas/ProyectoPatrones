import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber } from "class-validator";

export class CreateChanceDto {
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    @Type(() => Date)
    date: Date;

    @IsInt()
    @IsNotEmpty()
    delegationId: number;


}
