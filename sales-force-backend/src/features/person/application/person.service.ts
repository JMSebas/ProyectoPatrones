import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from '../application/dto/create-person.dto';
import { UpdatePersonDto } from '../application/dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PersonServiceInterface } from './ports/person-repository';
import { Person } from '@prisma/client';

@Injectable()
export class PersonService implements PersonServiceInterface{
  constructor(readonly prismaService: PrismaService) { 
  }
  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return await this.prismaService.person.create(
      {
        data:{
          dni: createPersonDto.dni,
          firstName: createPersonDto.firstName,
          secondName: createPersonDto.secondName,
          lastName: createPersonDto.lastName,
          secondLastName: createPersonDto.secondLastName,
          gender: createPersonDto.gender,
          address: createPersonDto.address,
          phone: createPersonDto.phone,
          email: createPersonDto.email,
          birthDate: createPersonDto.birthDate,
          locationId: createPersonDto.locationId
        }
      }
    );
  }

  async findAll():Promise<Person []>  {
    return await this.prismaService.person.findMany();
  }

  async findOne(id: number): Promise<Person | null>{
    return await this.prismaService.person.findUnique({
      where:{
        id
      }
    });
  }

  async update(id: number, updatePersonDto: UpdatePersonDto): Promise<Person> {
    return await this.prismaService.person.update({
      where: {
        id
      }, 
      data: updatePersonDto
    });
  }

  async remove(id: number): Promise<Person>{
    return await this.prismaService.person.delete({
      where: {
        id
      }
    });
  }
}
