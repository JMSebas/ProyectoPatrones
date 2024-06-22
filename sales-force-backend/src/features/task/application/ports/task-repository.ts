import { Quota, Task } from "@prisma/client";
import { CreateTaskDto } from "../dto/create-task.dto";

export interface TaskInterfaceService{
    create(createTaskDto: CreateTaskDto):Promise<Task>;
    findAll():Promise<Task[]>;
    findOne(id: number):Promise<Task |null>;
    remove(id: number):Promise<Task>;

    changeState(id: number):Promise<Task>;
    getLastQuota(employeeId: number):Promise<Quota>;
    addChance(employeeId: number, reason: string, delegationId: number);
}