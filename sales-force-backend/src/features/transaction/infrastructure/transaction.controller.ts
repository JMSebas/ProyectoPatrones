import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TransactionService } from '../application/transaction.service';
import { CreateTransactionDto } from '../application/dto/create-transaction.dto';
import { UpdateTransactionDto } from '../application/dto/update-transaction.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from 'src/features/item/application/dto/create-item.dto';
@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Put('changeState/:id')
  changeState(@Param('id') id: string) {
    return this.transactionService.changeState(+id)
  }

  @Put('cancelled/:id')
  cancelled(@Param('id') id: string) {
    return this.transactionService.cancelledTransaction(+id)
  }

  @Put(':id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto
  ) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Post(':id/items')
  async addItem(
    @Param('id') transactionId: string,
    @Body() createItemDto: CreateItemDto
  ) {
    return this.transactionService.addItem(+transactionId, createItemDto);
  }

  @Delete(':id/items/:itemId')
  async removeItem(
    @Param('id') transactionId: string,
    @Param('itemId') itemId: string
  ) {
    return this.transactionService.removeItem(+transactionId, +itemId);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
