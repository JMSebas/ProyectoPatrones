// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ItemService } from '../application/item.service'; 
// import { CreateItemDto } from '../application/dto/create-item.dto'; 
// import { UpdateItemDto } from '../application/dto/update-item.dto'; 
// import { ApiTags } from '@nestjs/swagger';
// @ApiTags('Item')
// @Controller('item')
// export class ItemController {
//   constructor(private readonly itemService: ItemService) {}

//   @Post()
//   create(@Body() createItemDto: CreateItemDto) {
//     return this.itemService.create(createItemDto);
//   }

//   @Get()
//   findAll() {
//     return this.itemService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.itemService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
//     return this.itemService.update(+id, updateItemDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.itemService.remove(+id);
//   }
// }
