import { Person } from "@prisma/client";
import { CreatePersonDto } from "../dto/create-person.dto";
import { UpdatePersonDto } from "../dto/update-person.dto";
import { CreateConsumerPersonDto } from "../dto/consumer/create-consumerPerson.dto";
import { CreateEmployeePersonDto } from "../dto/employee/create-employeePerson.dto";

export interface PersonServiceInterface {
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person | null>;

    findAllEmployee():Promise<Person []>
    findAllConsumer():Promise<Person []>;

    findConsumer(id: number): Promise<Person | null>;
    findEmployee(id: number): Promise<Person | null>;
    
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: number): Promise<Person>;

    createConsumer(createConsumerPersonDto: CreateConsumerPersonDto): Promise<Person>;
    createEmployee(createEmployeePersonDto: CreateEmployeePersonDto ):Promise<Person>;

  }
  