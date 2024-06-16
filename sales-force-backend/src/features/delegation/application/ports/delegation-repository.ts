import { Delegation } from "@prisma/client";
import { CreateDelegationDto } from "../dto/create-delegation.dto";
import { UpdateDelegationDto } from "../dto/update-delegation.dto";

export interface DelegationInterfaceService{
    create(createDelegationDto: CreateDelegationDto): Promise<Delegation>;
    findAll(): Promise<Delegation[]>;
    findOne(id: number): Promise<Delegation | null>;
    update(id: number, updateDelegationDto: UpdateDelegationDto): Promise<Delegation>;
    remove(id: number): Promise<Delegation>;
}