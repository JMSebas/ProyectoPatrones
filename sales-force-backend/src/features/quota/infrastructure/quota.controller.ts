import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuotaService } from '../application/quota.service'; 
import { CreateQuotaDto } from '../application/dto/create-quota.dto';
import { UpdateQuotaDto } from '../application/dto/update-quota.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Quota')
@Controller('quota')
export class QuotaController {
  constructor(private readonly quotaService: QuotaService) {}

  @Post()
  create(@Body() createQuotaDto: CreateQuotaDto) {
    return this.quotaService.create(createQuotaDto);
  }

  @Get()
  findAll() {
    return this.quotaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quotaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuotaDto: UpdateQuotaDto) {
    return this.quotaService.update(+id, updateQuotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quotaService.remove(+id);
  }
}
