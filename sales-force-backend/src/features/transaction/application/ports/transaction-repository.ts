import { Transaction } from "@prisma/client";
import { CreateTransactionDto } from "../dto/create-transaction.dto";
import { UpdateTransactionDto } from "../dto/update-transaction.dto";

export interface TransactionInterfaceService {
    create(createTransactionDto: CreateTransactionDto):Promise<Transaction | {message: string}>;
    findAll():Promise<Transaction[]>;
    findOne(id: number):Promise<Transaction|null>;
    remove(id: number):Promise<Transaction>;

    changeState(id: number):Promise<Transaction>;
}