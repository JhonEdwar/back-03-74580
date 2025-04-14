import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import swaggerUI from 'swagger-ui-express';
import swagger from 'swagger-jsdoc';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(process.env.MONGO)

app.use(express.json());
app.use(cookieParser());

const options={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"adoptions API",
            version:"1.0.0",
            description:"API para adopcion de mascotas"
        },
    },
    apis:["./src/docs/*.yaml"]
}
const spec=swagger(options);
console.log(spec)
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(spec))


app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks',mocksRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
