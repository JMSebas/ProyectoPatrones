import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from '../application/dto/create-person.dto';
import { UpdatePersonDto } from '../application/dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PersonServiceInterface } from './ports/person-repository';
import { Person } from '@prisma/client';
import { CreateConsumerPersonDto } from './dto/consumer/create-consumerPerson.dto';
import { CreateEmployeePersonDto } from './dto/employee/create-employeePerson.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PersonService implements PersonServiceInterface {
  constructor(readonly prismaService: PrismaService) {
  }

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return await this.prismaService.person.create(
      {
        data: {
          dni: createPersonDto.dni,
          firstName: createPersonDto.firstName,
          lastName: createPersonDto.lastName,
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


  async createConsumer(createConsumerPersonDto: CreateConsumerPersonDto): Promise<Person> {
    const personData = {
      dni: createConsumerPersonDto.dni,
      firstName: createConsumerPersonDto.firstName,
      lastName: createConsumerPersonDto.lastName,
      gender: createConsumerPersonDto.gender,
      address: createConsumerPersonDto.address,
      phone: createConsumerPersonDto.phone,
      email: createConsumerPersonDto.email,
      birthDate: createConsumerPersonDto.birthDate,
      locationId: createConsumerPersonDto.locationId
    }

    const consumerData = {
      type: createConsumerPersonDto.consumer.type,
      isCustomer: createConsumerPersonDto.consumer.isCustomer
    }

    return await this.prismaService.person.create({
      data: {
        ...personData
        ,
        consumer: {
          create: consumerData
        }
      }
    })
  }

  async createEmployee(createEmployeePersonDto: CreateEmployeePersonDto): Promise<Person> {
    const personData = {
      dni: createEmployeePersonDto.dni,
      firstName: createEmployeePersonDto.firstName,
      lastName: createEmployeePersonDto.lastName,
      gender: createEmployeePersonDto.gender,
      address: createEmployeePersonDto.address,
      phone: createEmployeePersonDto.phone,
      email: createEmployeePersonDto.email,
      birthDate: createEmployeePersonDto.birthDate,
      locationId: createEmployeePersonDto.locationId
    }


    const { password } = createEmployeePersonDto.employee;
    const hashedPassword = await this.hashPassword(password)

    const employeeData = {
      username: createEmployeePersonDto.employee.username,
      hashedPassword,
      role: createEmployeePersonDto.employee.role,
      isActive: createEmployeePersonDto.employee.isActive
    }
    return await this.prismaService.person.create({
      data: {
        ...personData,
        employee: {
          create: employeeData
        }
      }
    })
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword
  }

  async findAllEmployee(): Promise<Person[]> {
    return await this.prismaService.person.findMany({
      select: {
        id: true,
        dni: true,
        firstName: true,
        lastName: true,
        gender: true,
        address: true,
        phone: true,
        email: true,
        birthDate: true,
        locationId: true,
        employee: true,
        createdAt: true,
        updateAt: true
      },
      where: {
        consumer: null
      }
    });
  }

  async findAllConsumer(): Promise<Person[]> {
    return await this.prismaService.person.findMany({
      select: {
        id: true,
        dni: true,
        firstName: true,
        lastName: true,
        gender: true,
        address: true,
        phone: true,
        email: true,
        birthDate: true,
        locationId: true,
        consumer: true,
        createdAt: true,
        updateAt: true
      },
      where: {
        employee: null
      }
    });
  }

  async findEmployee(id: number): Promise<Person | null> {
    return await this.prismaService.person.findUnique({
      select: {
        id: true,
        dni: true,
        firstName: true,
        lastName: true,
        gender: true,
        address: true,
        phone: true,
        email: true,
        birthDate: true,
        locationId: true,
        employee: true,
        createdAt: true,
        updateAt: true
      },
      where: {
        id,
        consumer: null
      }
    });
  }
  async findConsumer(id: number): Promise<Person | null> {
    return await this.prismaService.person.findUnique({
      select: {
        id: true,
        dni: true,
        firstName: true,
        lastName: true,
        gender: true,
        address: true,
        phone: true,
        email: true,
        birthDate: true,
        locationId: true,
        consumer: true,
        createdAt: true,
        updateAt: true
      },
      where: {
        id,
        employee: null
      }
    });
  }

  async findAll(): Promise<Person[]> {
    return await this.prismaService.person.findMany();
  }


  async findOne(id: number): Promise<Person | null> {
    return await this.prismaService.person.findUnique({
      where: {
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

//POR VER
  async remove(id: number): Promise<Person> {
  return await this.prismaService.person.delete({
        where: { id }
      });
   
  }
}
