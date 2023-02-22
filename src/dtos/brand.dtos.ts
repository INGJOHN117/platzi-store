import { IsNumber, IsNotEmpty, IsString, IsPositive } from "class-validator";
import { PartialType } from '@nestjs/mapped-types'

export class CreateBrandDto {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly id_categories:number;
    @IsString()
    @IsNotEmpty()
    readonly name:string;
    @IsString()
    @IsNotEmpty()
    readonly maker:string;
    @IsString()
    @IsNotEmpty()
    readonly description:string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto){}