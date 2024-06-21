import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateConsumerNestedDto {

@IsString()
@IsNotEmpty()
type: string;

@IsBoolean()
@IsNotEmpty()
isCustomer: boolean;

}