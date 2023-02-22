import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrdersService {
    private counterId = 1;
    private categories:Order[] = [{
        id:1,
        id_product:1,
        id_customer:1,
        id_user:1,
        id_category:1,
        description:'oeder service description',	
    }];

    findAll(){
        return this.categories;
    }

    findOne(id:number){
        const order = this.categories.find(item => item.id === id);
        if(!order){ 
            throw new NotFoundException(`order with id ${id} not found`);
        }
        return order;
    }

    create(payload:CreateOrderDto){
        console.log(payload)
        this.counterId++;
        const newOrder = {
            id: this.counterId,
            ...payload,
        }
        this.categories.push(newOrder);
        return newOrder; 
    }

    update(id:number, payload:UpdateOrderDto){
        const order = this.findOne(id);
        if(order){
            const index = this.categories.findIndex(item => item.id === id);
            this.categories[index] = {...order,...payload};
            return  this.categories[index];
        }
        return null;
    }

    delete(id:number) {
        const order = this.findOne(id);
        const index = this.categories.findIndex(item => item.id === id)
        return this.categories.splice(index, 1);
    }
    
}
