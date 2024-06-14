import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DelegationService } from './delegation.service';
import { CreateDelegationDto } from './dto/create-delegation.dto';
import { UpdateDelegationDto } from './dto/update-delegation.dto';

@Controller('delegation')
export class DelegationController {
  constructor(private readonly delegationService: DelegationService) {}

  @Post()
  create(@Body() createDelegationDto: CreateDelegationDto) {
    return this.delegationService.create(createDelegationDto);
  }

  @Get()
  findAll() {
    return this.delegationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delegationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDelegationDto: UpdateDelegationDto) {
    return this.delegationService.update(+id, updateDelegationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delegationService.remove(+id);
  }
}
