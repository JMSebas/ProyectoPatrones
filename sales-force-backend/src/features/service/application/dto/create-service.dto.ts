import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateServiceDto {
@IsString()
@IsNotEmpty()
name: string;

@IsString()
@IsNotEmpty()
description: string;

@IsBoolean()
@IsNotEmpty()
isAvaliable: boolean;

@IsNotEmpty()
@IsNumber()
priceHour: number;

}
