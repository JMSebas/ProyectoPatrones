
import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateConsumerDto {

@IsString()
@IsNotEmpty()
type: string;

@IsBoolean()
@IsNotEmpty()
isCustomer: boolean;


@IsInt()
@IsNotEmpty()
personId: number;
}
