import { IsEmail, IsNotEmpty, IsString, Length, IsInt, Min } from "class-validator";


export class AuthDto {
    @IsNotEmpty()
    @IsString()
    public firstName: string;

    @IsNotEmpty()
    @IsString()
    public lastName: string;

   
    @IsEmail()
    public email: string;



    @IsNotEmpty()
    @IsString()
    @Length(3, 20, {message: 'Password has to be at between 3 and 20 chars'})
    public password: string;

    @IsInt()
    @Min(1, { message: 'Role ID must be a positive integer' })
    public roleId: number;
}