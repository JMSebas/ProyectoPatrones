import { Module } from '@nestjs/common';
import { PersonService } from '../application/person.service'; 
import { PersonController } from './person.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports:[PrismaModule]
})
export class PersonModule {}
