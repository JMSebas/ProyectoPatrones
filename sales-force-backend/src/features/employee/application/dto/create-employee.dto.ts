import { IsBoolean, IsInt, IsNotEmpty, IsString, Length, Min } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Password has to be between 3 and 20 characters' })
    password: string;


    @IsNotEmpty()
    @IsString()
    role: string;

    @IsBoolean()
    isActive: boolean;

    @IsInt()
    @Min(1, { message: 'Person ID must be a positive integer' })
    personId: number;
}
