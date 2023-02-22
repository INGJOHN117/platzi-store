import { IsNumber, IsNotEmpty, IsString , IsPositive} from "class-validator";
import { PartialType } from '@nestjs/mapped-types'

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    readonly name:string;
    @IsString()
    @IsNotEmpty()
    readonly last_name:string;
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly age:number
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly phone:number;
    @IsString()
    @IsNotEmpty()
    readonly email:string;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}