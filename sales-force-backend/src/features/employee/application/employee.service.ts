import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from '../application/dto/create-employee.dto';
import { UpdateEmployeeDto } from '../application/dto/update-employee.dto';
import { EmployeeInterfaceService } from './ports/employee-repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { Employee } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeeService implements EmployeeInterfaceService {
  constructor(readonly prismaService: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { password } = createEmployeeDto;
    const hashedPassword = await this.hashPassword(password);
    return await this.prismaService.employee.create({
      data: {
        username: createEmployeeDto.username,
        hashedPassword,
        isActive: createEmployeeDto.isActive,
        role: createEmployeeDto.role,
        personId: createEmployeeDto.personId,
      },
    });
  }

  async findAll(): Promise<Employee[]> {
    return await this.prismaService.employee.findMany();
  }

  async findOne(id: number): Promise<Employee | null> {
    return await this.prismaService.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    return await this.prismaService.employee.update({
      where: {
        id,
      },
      data: {
        username: updateEmployeeDto.username,
        role: updateEmployeeDto.role,
        person: {
          update: {
            firstName: updateEmployeeDto.person.firstName,
            lastName: updateEmployeeDto.person.lastName,
            email: updateEmployeeDto.person.email,
            phone: updateEmployeeDto.person.phone,
            address: updateEmployeeDto.person.address,
            birthDate: updateEmployeeDto.person.birthDate,
            dni: updateEmployeeDto.person.dni,
            gender: updateEmployeeDto.person.gender,
            location: {
              update: {
                name: updateEmployeeDto.location.name,
              },
            },
          },
        },
      },
    });
  }

  async remove(id: number): Promise<Employee> {
    return await this.prismaService.employee.delete({
      where: {
        id,
      },
    });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    return hashedPassword;
  }

  async comparePasswords(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }
}
