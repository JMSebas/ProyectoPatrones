import { Type } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";
import { Consumer } from "src/features/consumer/domain/consumer.entity";
import { Employee } from "src/features/employee/domain/employee.entity";

export class CreateDelegationDto {

@Type(()=> Employee)
@IsInt()
@IsNotEmpty()
employeeId: number;

@Type(()=> Consumer)
@IsInt()
@IsNotEmpty()
consumerId: number;

}
