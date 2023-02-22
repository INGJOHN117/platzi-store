import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dtos/category.dtos';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
    private counterId = 1;
    private categories:Category[] = [{
        id:1,
        description: 'this is a  brand category',
    }];

    findAll(){
        return this.categories;
    }

    findOne(id:number){
        const category = this.categories.find(item => item.id === id);
        if(!category){ 
            throw new NotFoundException(`category with id ${id} not found`);
        }
        return category;
    }

    create(payload:CreateCategoryDto){
        console.log(payload)
        this.counterId++;
        const newcategory = {
            id: this.counterId,
            ...payload,
        }
        this.categories.push(newcategory);
        return newcategory; 
    }

    update(id:number, payload:UpdateCategoryDto){
        const category = this.findOne(id);
        if(category){
            const index = this.categories.findIndex(item => item.id === id);
            this.categories[index] = {...category,...payload};
            return  this.categories[index];
        }
        return null;
    }

    delete(id:number) {
        const category = this.findOne(id);
        const index = this.categories.findIndex(item => item.id === id)
        return this.categories.splice(index, 1);
    }
}
