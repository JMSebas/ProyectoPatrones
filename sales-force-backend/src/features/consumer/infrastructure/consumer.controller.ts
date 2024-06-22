import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumerService } from '../application/consumer.service'; 
import { CreateConsumerDto } from '../application/dto/create-consumer.dto';
import { UpdateConsumerDto } from '../application/dto/update-consumer.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Consumer')
@Controller('consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @Post()
  create(@Body() createConsumerDto: CreateConsumerDto) {
    return this.consumerService.create(createConsumerDto);
  }

  @Get()
  findAll() {
    return this.consumerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumerDto: UpdateConsumerDto) {
    return this.consumerService.update(+id, updateConsumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumerService.remove(+id);
  }
}
