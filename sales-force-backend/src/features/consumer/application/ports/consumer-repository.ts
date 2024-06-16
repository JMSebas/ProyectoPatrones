import { Consumer } from "@prisma/client";
import { CreateConsumerDto } from "../dto/create-consumer.dto";
import { UpdateConsumerDto } from "../dto/update-consumer.dto";

export interface ConsumerInterfaceService{
    create(createConsumerDto: CreateConsumerDto): Promise<Consumer>;
    findAll(): Promise<Consumer[]>;
    findOne(id: number): Promise<Consumer | null>;
    update(id: number, updateConsumerDto: UpdateConsumerDto): Promise<Consumer>;
    remove(id: number): Promise<Consumer>;
}