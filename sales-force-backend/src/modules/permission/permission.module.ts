import { Module } from '@nestjs/common';
import { PermissionController } from './controllers/permission/permission.controller';

@Module({
  controllers: [PermissionController]
})
export class PermissionModule {}
