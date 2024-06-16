import { Location } from "@prisma/client";
import { CreateLocationDto } from "../dto/create-location.dto";
import { UpdateLocationDto } from "../dto/update-location.dto";

export interface LocationInterfaceService {

    create(createLocationDto: CreateLocationDto): Promise<Location>;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location | null>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location>;
    remove(id: number): Promise<Location>;
  }
  