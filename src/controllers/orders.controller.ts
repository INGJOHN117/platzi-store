import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}
    
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand:string){
        return this.ordersService.findAll();
    }

    @Get('filter')
    getProductFilter(){
        return {message:`I´m a filter`};
    }

    @Get(':_id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('_id', ParseIntPipe) _id: number){
        return this.ordersService.findOne(_id);
    }

    @Post()
    create(@Body() payload:CreateOrderDto) {
        return this.ordersService.create(payload);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateOrderDto) {
        return this.ordersService.update(id, payload);   
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number) {
        return this.ordersService.delete(id);
    }
}
