import { Consumer, Employee } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEmail,  IsInt, IsNotEmpty, IsOptional, IsString, Length, Min, ValidateNested } from "class-validator";
import { CreateConsumerDto } from "src/features/consumer/application/dto/create-consumer.dto";
import { CreateConsumerNestedDto } from "src/features/consumer/application/dto/create-consumerNested.dto";

export class CreateConsumerPersonDto {
    @IsNotEmpty()
    @IsString()
    dni: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;


    @IsNotEmpty()
    @IsString()
    gender: string;


    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    @Length(10, 10, {message:'El numero debe contener los 10 digitos'})
    phone: string;

    @Type(()=> Date)
    @IsNotEmpty()
    birthDate: Date;

    @IsInt({message: 'Debe ser un valor entero'})
    @IsNotEmpty()
    locationId: number;

    @ValidateNested({each: true})
    @IsNotEmpty()
    @Type(()=> CreateConsumerNestedDto)
    consumer: CreateConsumerNestedDto;
}
