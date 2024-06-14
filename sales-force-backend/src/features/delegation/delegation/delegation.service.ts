import { Injectable } from '@nestjs/common';
import { CreateDelegationDto } from './dto/create-delegation.dto';
import { UpdateDelegationDto } from './dto/update-delegation.dto';

@Injectable()
export class DelegationService {
  create(createDelegationDto: CreateDelegationDto) {
    return 'This action adds a new delegation';
  }

  findAll() {
    return `This action returns all delegation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} delegation`;
  }

  update(id: number, updateDelegationDto: UpdateDelegationDto) {
    return `This action updates a #${id} delegation`;
  }

  remove(id: number) {
    return `This action removes a #${id} delegation`;
  }
}
