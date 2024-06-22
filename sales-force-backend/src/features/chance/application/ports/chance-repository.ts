import { Chance } from "@prisma/client"
import { CreateChanceDto } from "../dto/create-chance.dto";

export interface ChanceInterfaceService{

    create(createChanceDto: CreateChanceDto):Promise<Chance>;
    findAll():Promise<Chance[]>;
    findOne(id: number):Promise<Chance | null>;
    update(id: number, updateChanceDto):Promise<Chance>;
    remove(id: number): Promise<Chance>;

    changeState(id: number): Promise<Chance>;
}