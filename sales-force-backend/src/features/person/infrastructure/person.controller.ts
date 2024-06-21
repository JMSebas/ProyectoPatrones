import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonService } from '../application/person.service'; 
import { CreatePersonDto } from '../application/dto/create-person.dto';
import { UpdatePersonDto } from '../application/dto/update-person.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateConsumerPersonDto } from '../application/dto/consumer/create-consumerPerson.dto';
import { CreateEmployeePersonDto } from '../application/dto/employee/create-employeePerson.dto';
@ApiTags('Person')
@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Post('createConsumer')
  createConsumer(@Body() createConsumerPersonDto: CreateConsumerPersonDto){
    return this.personService.createConsumer(createConsumerPersonDto);
  }

  @Post('createEmployee')
  createEmployee(@Body() createEmployeePersonDto: CreateEmployeePersonDto){
    return this.personService.createEmployee(createEmployeePersonDto);
  }
  
  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
