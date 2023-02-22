import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';
import { Injectable, NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { Product} from './../entities/product.entity'

@Injectable()
export class ProductsService {
    private counterId = 1;
    private products:Product[] = [{
        id:1,
        name:'Product 1',
        description:'black product',
        price:122,
        stock:0,
        image:''
    }];

    findAll(){
        return this.products;
    }

    findOne(id:number){
        const product = this.products.find(item => item.id === id);
        if(!product){ 
            throw new NotFoundException(`product with id ${id} not found`);
        }
        return product;
    }

    create(payload:CreateProductDto){
        console.log(payload)
        this.counterId++;
        const newProduct = {
            id: this.counterId,
            ...payload,
        }
        this.products.push(newProduct);
        return newProduct; 
    }

    update(id:number, payload:UpdateProductDto){
        const product = this.findOne(id);
        if(product){
            const index = this.products.findIndex(item => item.id === id);
            this.products[index] = {...product,...payload};
            return  this.products[index];
        }
        return null;
    }

    delete(id:number) {
        const product = this.findOne(id);
        const index = this.products.findIndex(item => item.id === id)
        return this.products.splice(index, 1);
    }
}
