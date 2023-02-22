import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/user.dtos';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
    private counterId = 1;
    private categories:User[] = [{
        id:1,
        name:'test',
        last_name:'test last name',
        age:1,
        phone:3165706257,
        email:'test@test.com',	
    }];

    findAll(){
        return this.categories;
    }

    findOne(id:number){
        const user = this.categories.find(item => item.id === id);
        if(!user){ 
            throw new NotFoundException(`user with id ${id} not found`);
        }
        return user;
    }

    create(payload:CreateUserDto){
        console.log(payload)
        this.counterId++;
        const newUser = {
            id: this.counterId,
            ...payload,
        }
        this.categories.push(newUser);
        return newUser; 
    }

    update(id:number, payload:UpdateUserDto){
        const user = this.findOne(id);
        if(user){
            const index = this.categories.findIndex(item => item.id === id);
            this.categories[index] = {...user,...payload};
            return  this.categories[index];
        }
        return null;
    }

    delete(id:number) {
        const user = this.findOne(id);
        const index = this.categories.findIndex(item => item.id === id)
        return this.categories.splice(index, 1);
    }
}
