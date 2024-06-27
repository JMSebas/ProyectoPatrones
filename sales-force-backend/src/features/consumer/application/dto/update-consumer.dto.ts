import { CreatePersonDto } from 'src/features/person/application/dto/create-person.dto';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateLocationDto } from 'src/features/location/application/dto/create-location.dto';
import { Type } from 'class-transformer';

export class UpdateConsumerDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @ValidateNested({ each: true })
  @Type(() => CreatePersonDto)
  @IsOptional()
  person: CreatePersonDto;

  @ValidateNested({ each: true })
  @Type(() => CreateLocationDto)
  @IsOptional()
  location: CreateLocationDto;
}
