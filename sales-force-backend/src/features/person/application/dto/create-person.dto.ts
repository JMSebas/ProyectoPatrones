import { Type } from "class-transformer";
import { IsEmail, IsIBAN, IsIn, IsInt, IsNotEmpty, IsOptional, IsString, Length, Min } from "class-validator";

export class CreatePersonDto {
    @IsNotEmpty()
    @IsString()
    dni: string;

    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    secondName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsString()
    secondLastName: string;

    @IsNotEmpty()
    @IsString()
    gender: string;


    @IsEmail({})
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    @Length(10, 10, {message:'El numero debe contener los 10 digitos'})
    // @Min(10, {message: 'El numero de telefono debe contener 10 digitos'}) por que error??
    phone: string;

    @Type(()=> Date)
    @IsNotEmpty()
    birthDate: Date;

    @IsInt({message: 'Debe ser un valor entero'})
    @IsNotEmpty()
    locationId: number;




}
