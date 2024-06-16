import { Module } from "@prisma/client";
import { CreateModuleDto } from "../dto/create-module.dto";
import { UpdateModuleDto } from "../dto/update-module.dto";

export interface ModuleInterfaceService {

    create(createModuleDto: CreateModuleDto): Promise<Module>;
    findAll(): Promise<Module[]>;
    findOne(id: number): Promise<Module | null>;
    update(id: number, updateModuleDto: UpdateModuleDto): Promise<Module>;
    remove(id: number): Promise<Module>;
  }
  