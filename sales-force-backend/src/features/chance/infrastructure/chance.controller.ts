import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ChanceService } from '../application/chance.service';
import { CreateChanceDto } from '../application/dto/create-chance.dto'; 
import { UpdateChanceDto } from '../application/dto/update-chance.dto'; 
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Chance')
@Controller('chance')
export class ChanceController {
  constructor(private readonly chanceService: ChanceService) {}

  @Post()
  create(@Body() createChanceDto: CreateChanceDto) {
    return this.chanceService.create(createChanceDto);
  }

  @Get()
  findAll() {
    return this.chanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chanceService.findOne(+id);
  }

  @Put('changeStatus/:id')
  changeState(@Param('id') id: string){
    return this.chanceService.changeState(+id)
  }

  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChanceDto: UpdateChanceDto) {
    return this.chanceService.update(+id, updateChanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chanceService.remove(+id);
  }
}
