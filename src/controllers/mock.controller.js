import { fakerES_MX as faker } from '@faker-js/faker'
import { usersService } from "../services/index.js";
import { petsService } from "../services/index.js"


const createUser= async(cantidad)=>{
   
    if(!cantidad) cantidad=50
   
  
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
    return users
}

const createPets= async(cantidad)=>{
    
    if(!cantidad) cantidad=50
   
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
    return pets

}

// funciones de la ruta de mocks

const createMockUsers = async(req,res)=>{
    const users= await createUser()
    res.send({status:"success",payload:users})
    return users
}

const createMockPets = async(req,res)=>{
    const pets= await createPets()
    res.send({status:"success",payload:pets})
    return pets
}

const generateData = async(req,res)=>{
   let {users, pets}= req.body
   const usersCreated = await createUser(users)
   const petsCreated = await createPets(pets)
    res.send({status:"success",payload:{users,pets}})

}


export default {
    createMockUsers,
    createMockPets,
    generateData
}

