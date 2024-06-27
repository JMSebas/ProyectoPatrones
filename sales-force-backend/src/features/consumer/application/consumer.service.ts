import { Injectable } from '@nestjs/common';
import { CreateConsumerDto } from '../application/dto/create-consumer.dto';
import { UpdateConsumerDto } from '../application/dto/update-consumer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConsumerInterfaceService } from './ports/consumer-repository';
import { Consumer } from '@prisma/client';

@Injectable()
export class ConsumerService implements ConsumerInterfaceService {
  constructor(readonly prismaService: PrismaService) {}

  async create(createConsumerDto: CreateConsumerDto): Promise<Consumer> {
    return await this.prismaService.consumer.create({
      data: {
        type: createConsumerDto.type,
        isCustomer: createConsumerDto.isCustomer,
        personId: createConsumerDto.personId,
      },
    });
  }

  async findAll(): Promise<Consumer[]> {
    return await this.prismaService.consumer.findMany();
  }

  async findOne(id: number): Promise<Consumer> {
    return await this.prismaService.consumer.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateConsumerDto: UpdateConsumerDto,
  ): Promise<Consumer> {
    return await this.prismaService.consumer.update({
      where: {
        id,
      },
      data: {
        type: updateConsumerDto.type,
        person: {
          update: {
            firstName: updateConsumerDto.person.firstName,
            lastName: updateConsumerDto.person.lastName,
            email: updateConsumerDto.person.email,
            phone: updateConsumerDto.person.phone,
            address: updateConsumerDto.person.address,
            birthDate: updateConsumerDto.person.birthDate,
            dni: updateConsumerDto.person.dni,
            gender: updateConsumerDto.person.gender,
            location: {
              update: {
                name: updateConsumerDto.location.name,
              },
            },
          },
        },
      },
    });
  }

  async remove(id: number): Promise<Consumer> {
    return await this.prismaService.consumer.delete({
      where: {
        id,
      },
    });
  }
}
