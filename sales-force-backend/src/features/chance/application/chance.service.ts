import { Injectable } from '@nestjs/common';
import { CreateChanceDto } from './dto/create-chance.dto';
import { UpdateChanceDto } from './dto/update-chance.dto';

@Injectable()
export class ChanceService {
  create(createChanceDto: CreateChanceDto) {
    return 'This action adds a new chance';
  }

  findAll() {
    return `This action returns all chance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chance`;
  }

  update(id: number, updateChanceDto: UpdateChanceDto) {
    return `This action updates a #${id} chance`;
  }

  remove(id: number) {
    return `This action removes a #${id} chance`;
  }
}
