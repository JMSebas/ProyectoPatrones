import { Module } from '@nestjs/common';
import { ModuleController } from './controllers/module/module.controller';

@Module({
  controllers: [ModuleController]
})
export class ModuleModule {}
