import { 
    Controller,
    Get,
    Param,
    Query,
    Post,
    Body,
    Put,
    Delete,
    HttpCode,
    HttpStatus,
    ParseIntPipe,
 } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
// import { ParseIntPipe } from 'src/commont/parse-int/parse-int.pipe';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService){}
    
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand:string){
        // return  { message: `product: limit=> ${limit} offset=> ${offset} brand => ${brand}`};
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
    create(@Body() payload:CreateProductDto) {
        return this.productsService.create(payload);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateProductDto) {
        return this.productsService.update(id, payload);   
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number) {
        return this.productsService.delete(id);
    }
}
