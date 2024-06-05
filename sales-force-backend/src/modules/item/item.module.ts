import { Module } from '@nestjs/common';
import { ItemController } from './controllers/item/item.controller';

@Module({
  controllers: [ItemController]
})
export class ItemModule {}
