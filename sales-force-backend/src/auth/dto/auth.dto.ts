import { IsBoolean, IsNotEmpty, IsString, Length, IsInt, Min } from "class-validator";

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    public username: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Password has to be between 3 and 20 characters' })
    public password: string;


    @IsNotEmpty()
    @IsString()
    public role: string;

    @IsBoolean()
    public isActive: boolean;

    @IsInt()
    @Min(1, { message: 'Role ID must be a positive integer' })
    public personId: number;
}
