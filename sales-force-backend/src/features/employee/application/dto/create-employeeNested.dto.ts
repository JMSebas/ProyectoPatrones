import { IsBoolean, IsInt, IsNotEmpty, IsString, Length, Min } from "class-validator";

export class CreateEmployeeNestedDto {
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

}
