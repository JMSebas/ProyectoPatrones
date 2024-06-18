import { Service } from "@prisma/client";
import { CreateServiceDto } from "../dto/create-service.dto";
import { UpdateServiceDto } from "../dto/update-service.dto";

export interface ServiceInterfaceService {
    create(CreateServiceDto: CreateServiceDto): Promise<Service>;
    findAll(): Promise<Service[]>;
    findOne(id: number): Promise<Service | null>;
    update(id: number, updateServiceDto:UpdateServiceDto): Promise<Service>;
    remove(id: number): Promise<Service>;
}