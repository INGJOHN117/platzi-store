import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dtos';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    
    @Get()
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand:string){
        return this.usersService.findAll();
    }

    @Get('filter')
    getProductFilter(){
        return {message:`I´m a filter`};
    }

    @Get(':_id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('_id', ParseIntPipe) _id: number){
        return this.usersService.findOne(_id);
    }

    @Post()
    create(@Body() payload:CreateUserDto) {
        return this.usersService.create(payload);
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id:number, @Body() payload:UpdateUserDto) {
        return this.usersService.update(id, payload);   
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id:number) {
        return this.usersService.delete(id);
    }
}
