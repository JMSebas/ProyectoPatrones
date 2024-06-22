import { Type } from "class-transformer";
import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateQuotaDto {

    @Type(() => Date)
    @IsNotEmpty()
    startDate: Date;

    @Type(() => Date)
    @IsNotEmpty()
    endDate: Date;


    @IsNumber()
    @IsNotEmpty()
    amout: number;

    @IsNotEmpty()
    @IsString()
    comission: string;

    @IsNotEmpty()
    @IsString()
    achieved: string;


    @IsInt()
    @IsNotEmpty()
    employeeId: number;
}
