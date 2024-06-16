import { Module } from '@nestjs/common';
import { PermissionService } from '../application/permission.service'; 
import { PermissionController } from './permission.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PermissionController],
  providers: [PermissionService],
  imports: [PrismaModule]
})
export class PermissionModule {}
