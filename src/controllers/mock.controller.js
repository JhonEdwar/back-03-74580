import { fakerES_MX as faker } from '@faker-js/faker'
import { usersService } from "../services/index.js";
import { petsService } from "../services/index.js"


const create50Users = async(req,res)=>{
    const cantidad=50
    let users=[]
    for(let i=0;i<cantidad;i++){
    const userFaker= {
        first_name: faker.person.firstName(),
        last_name:faker.person.lastName(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(['admin', 'user']),
        password: "coder123"
    }

    let result = await usersService.create(userFaker)
    users.push(result)

}
    res.send({status:"success",payload:users})
}

const create50Pets = async(req,res)=>{
    const cantidad=50
    let pets=[]
    for(let i=0;i<cantidad;i++){
    const petFaker= {
       name: faker.animal.petName(),
        specie:faker.animal.type(),
        birthDate: faker.date.birthdate(),
        adopted: faker.datatype.boolean() 
    }

    let result = await petsService.create(petFaker)
    pets.push(result)

}
    res.send({status:"success",payload:pets})
}

const generateData = async(req,res)=>{
 
}


export default {
    create50Users,
    create50Pets
}

