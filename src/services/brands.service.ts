import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto,  UpdateBrandDto} from 'src/dtos/brand.dtos';
import { Brand } from 'src/entities/brand.entity';

@Injectable()
export class BrandsService {
    private counterId = 1;
    private brands:Brand[] = [{
        id:1,
        id_categories: 21,
        name:'brand 1',
        maker:'Adidas Inc',
        description: 'this is a  brand brand',
    }];

    findAll(){
        return this.brands;
    }

    findOne(id:number){
        const brand = this.brands.find(item => item.id === id);
        if(!brand){ 
            throw new NotFoundException(`brand with id ${id} not found`);
        }
        return brand;
    }

    create(payload:CreateBrandDto){
        console.log(payload)
        this.counterId++;
        const newbrand = {
            id: this.counterId,
            ...payload,
        }
        this.brands.push(newbrand);
        return newbrand; 
    }

    update(id:number, payload:UpdateBrandDto){
        const brand = this.findOne(id);
        if(brand){
            const index = this.brands.findIndex(item => item.id === id);
            this.brands[index] = {...brand,...payload};
            return  this.brands[index];
        }
        return null;
    }

    delete(id:number) {
        const brand = this.findOne(id);
        const index = this.brands.findIndex(item => item.id === id)
        return this.brands.splice(index, 1);
    }

}
