import { fakerES_MX as faker } from '@faker-js/faker';
import { usersService } from "../services/index.js";
import { petsService } from "../services/index.js";
import { createHash } from "../utils/index.js";


const createUser = async (cantidad) => {
    try {
        if(!cantidad) cantidad=50
        let users = [];
        for (let i = 0; i < cantidad; i++) {
            let passwordHash= await createHash(faker.internet.password());
            const userFaker = {
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                role: faker.helpers.arrayElement(['admin', 'user']),
                password: passwordHash
            };
            let result = await usersService.create(userFaker);
            users.push(result);
        }
        return users;
    } catch (error) {
        console.error("Error al crear usuarios:", error);
        throw new Error("Hubo un problema al generar usuarios");
    }
};

const createPets = async (cantidad) => {
    try {
        if(!cantidad) cantidad=50
        let pets = [];
        for (let i = 0; i < cantidad; i++) {
            const petFaker = {
                name: faker.animal.petName(),
                specie: faker.helpers.arrayElement(['Perro', 'Gato', 'Conejo', 'Pez', 'Ave']),
                birthDate: faker.date.birthdate(),
                adopted: faker.datatype.boolean()
            };
            let result = await petsService.create(petFaker);
            pets.push(result);
        }
        return pets;
    } catch (error) {
        console.error("Error al crear mascotas:", error);
        throw new Error("Hubo un problema al generar mascotas");
    }
};

// funciones de la ruta de mocks

const createMockUsers = async (req, res) => {
    try {
        const users = await createUser();
        res.status(200).send({ status: "success", payload: users });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
};

const createMockPets = async (req, res) => {
    try {
        const pets = await createPets();
        res.status(200).send({ status: "success", payload: pets });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
};

const generateData = async (req, res) => {
    try {
        let { users, pets } = req.body;
        if (!users || !pets) {
            return res.status(400).send({ status: "error", message: "Faltan datos en el cuerpo de la solicitud" });
        }
        const usersCreated = await createUser(users);
        const petsCreated = await createPets(pets);
        res.status(200).send({ status: "success", payload: { users: usersCreated, pets: petsCreated } });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
};

export default {
    createMockUsers,
    createMockPets,
    generateData
};