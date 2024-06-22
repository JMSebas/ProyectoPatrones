import { Permission } from "@prisma/client";
import { CreatePermissionDto } from "../dto/create-permission.dto";
import { UpdatePermissionDto } from "../dto/update-permission.dto";

export interface PermissionInterfaceService {

    create(createPermissionDto: CreatePermissionDto): Promise<Permission>;
    findAll(): Promise<Permission[]>;
    findOne(id: number): Promise<Permission | null>;
    update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<Permission>;
    remove(id: number): Promise<Permission>;
  }