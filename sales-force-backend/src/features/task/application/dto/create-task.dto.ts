import { Type } from "class-transformer";
import { IsArray, IsDate, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateCommentDto } from "src/features/comment/application/dto/create-comment.dto";

export class CreateTaskDto {
    @IsDate()
    @Type(() => Date)
    date: Date;
  
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @IsDate()
    @Type(() => Date)
    estimatedTime: Date;
  
    @IsInt()
    @IsNotEmpty()
    delegationId: number;
  
    @ValidateNested({each: true})
    @Type(()=> CreateCommentDto)
    @IsArray()
    @IsOptional()
    comments?: CreateCommentDto[];

}
