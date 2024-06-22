import { IsNotEmpty, IsString } from "class-validator";

export class CreateModuleDto {

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    name: string;

}
