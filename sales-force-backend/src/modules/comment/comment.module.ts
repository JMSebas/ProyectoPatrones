import { Module } from '@nestjs/common';
import { CommentController } from './controllers/comment/comment.controller';

@Module({
  controllers: [CommentController]
})
export class CommentModule {}
