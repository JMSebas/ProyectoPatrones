import { Quota, Task } from "@prisma/client";
import { CreateTaskDto } from "../dto/create-task.dto";

export interface TaskInterfaceService{
    create(createTaskDto: CreateTaskDto):Promise<Task | {message: string}>;
    findAll():Promise<Task[]>;
    findOne(id: number):Promise<Task |null>;
    remove(id: number):Promise<Task>;

    changeState(id: number):Promise<Task>;
    getLastQuota(employeeId: number):Promise<Quota | {message: string}>;
    addChance(employeeId: number, reason: string, delegationId: number);
}