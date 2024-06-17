import { Quota } from "@prisma/client";
import { CreateQuotaDto } from "../dto/create-quota.dto";
import { UpdateQuotaDto } from "../dto/update-quota.dto";

export interface QuotaInterfaceService {

    create(createQuotaDto:CreateQuotaDto): Promise<Quota>;
    findAll(): Promise<Quota[]>;
    findOne(id: number): Promise<Quota | null>;
    update(id: number, updateQuotaDto: UpdateQuotaDto): Promise<Quota>;
    remove(id: number): Promise<Quota>;
  }
  