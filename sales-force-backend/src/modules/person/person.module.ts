import { Module } from '@nestjs/common';
import { PersonController } from './controllers/person/person.controller';

@Module({
  controllers: [PersonController]
})
export class PersonModule {}
