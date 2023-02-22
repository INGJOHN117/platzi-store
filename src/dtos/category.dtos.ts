import { IsNotEmpty, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types'

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    readonly description:string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto){}