import { Employee } from "@prisma/client";
import { CreateEmployeeDto } from "../dto/create-employee.dto";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";

export interface EmployeeInterfaceService {
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: number): Promise<Employee | null> ;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto):Promise<Employee>;
    remove(id: number): Promise<Employee>;

    hashPassword(password: string): Promise<string>;
    comparePasswords(args: { password: string; hash: string }): Promise<boolean>;


}