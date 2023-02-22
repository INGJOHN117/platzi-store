import { IsNumber, IsNotEmpty, IsString, IsPositive } from "class-validator";
import { PartialType } from '@nestjs/mapped-types'

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly id_product:number;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly id_customer:number;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly id_user:number;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly id_category:number;
    @IsString()
    @IsNotEmpty()
    readonly description:string;	
}

export class UpdateOrderDto extends PartialType(CreateOrderDto){}