const myName = 'Johnny';
const myAge = 28;
const suma  = (a:number,b:number) => {
    return a + b;
}

suma(12,myAge);

class Persona{

    constructor(private age:number,public name:string){
        this.age = age;
        this.name = name;
    }    
    
    getSummary(){
        console.log("test summary")
        return `hi, my name is  ${this.name} and my age is ${this.age}`;
    }
}


const johnny = new Persona(28, 'Johnny Martin Acosta Parra');
johnny.getSummary();


