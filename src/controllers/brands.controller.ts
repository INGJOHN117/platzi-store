import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brand.dtos';
import { BrandsService } from 'src/services/brands.service';

@Controller('brands')
export class BrandsController {
    
    constructor(private productsService: BrandsService){}
    
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand:string){
        return this.productsService.findAll();
    }

    @Get('filter')
    getProductFilter(){
        return {message:`I´m a filter`};
    }

    @Get(':_id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('_id', ParseIntPipe) _id: number){
        return this.productsService.findOne(_id);
    }

    @Post()
    create(@Body() payload:CreateBrandDto) {
        return this.productsService.create(payload);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateBrandDto) {
        return this.productsService.update(id, payload);   
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number) {
        return this.productsService.delete(id);
    }
}
