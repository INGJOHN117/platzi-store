import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customer.dtos';
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService){}
    
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand:string){
        return this.customersService.findAll();
    }

    @Get('filter')
    getProductFilter(){
        return {message:`I´m a filter`};
    }

    @Get(':_id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('_id', ParseIntPipe) _id: number){
        return this.customersService.findOne(_id);
    }

    @Post()
    create(@Body() payload:CreateCustomerDto) {
        return this.customersService.create(payload);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateCustomerDto) {
        return this.customersService.update(id, payload);   
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number) {
        return this.customersService.delete(id);
    }
}
