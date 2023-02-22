import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customer.dtos';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
    private counterId = 1;
    private categories:Customer[] = [{
        id: 1,
        name: 'Johnny',
        last_name:'Acosta',
        age:23,
        phone:3165706257,
        email:'xjohn117@outlook.com',
    }];

    findAll(){
        return this.categories;
    }

    findOne(id:number){
        const customer = this.categories.find(item => item.id === id);
        if(!customer){ 
            throw new NotFoundException(`customer with id ${id} not found`);
        }
        return customer;
    }

    create(payload:CreateCustomerDto){
        console.log(payload)
        this.counterId++;
        const newCustomer = {
            id: this.counterId,
            ...payload,
        }
        this.categories.push(newCustomer);
        return newCustomer; 
    }

    update(id:number, payload:UpdateCustomerDto){
        const customer = this.findOne(id);
        if(customer){
            const index = this.categories.findIndex(item => item.id === id);
            this.categories[index] = {...customer,...payload};
            return  this.categories[index];
        }
        return null;
    }

    delete(id:number) {
        const customer = this.findOne(id);
        const index = this.categories.findIndex(item => item.id === id)
        return this.categories.splice(index, 1);
    }

}
