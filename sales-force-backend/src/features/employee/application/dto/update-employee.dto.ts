import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLocationDto } from 'src/features/location/application/dto/create-location.dto';
import { CreatePersonDto } from 'src/features/person/application/dto/create-person.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @ValidateNested({ each: true })
  @Type(() => CreatePersonDto)
  @IsOptional()
  person: CreatePersonDto;

  @ValidateNested({ each: true })
  @Type(() => CreateLocationDto)
  @IsOptional()
  location: CreateLocationDto;
}
