import { Person } from "@prisma/client";
import { CreatePersonDto } from "../dto/create-person.dto";
import { UpdatePersonDto } from "../dto/update-person.dto";

export interface PersonServiceInterface {
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    findAll(): Promise<Person[]>;
    findOne(id: number): Promise<Person | null>;
    update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person>;
    remove(id: number): Promise<Person>;
  }
  