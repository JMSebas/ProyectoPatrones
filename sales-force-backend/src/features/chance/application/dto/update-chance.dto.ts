import { PartialType } from '@nestjs/mapped-types';
import { CreateChanceDto } from './create-chance.dto';

export class UpdateChanceDto extends PartialType(CreateChanceDto) {}
