import { IsInt, IsNotEmpty } from "class-validator";

export class CreatePermissionDto {
    @IsInt()
    @IsNotEmpty()
    employeeId: number;

    @IsInt()
    @IsNotEmpty()
    moduleId: number;

    

}
