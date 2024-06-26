import express from 'express';
import dbConnection from './db.js';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import stepRouter from './routes/stepRoutes.js';
import bmiRouter from './routes/bmiRoutes.js';
import continuousStepRoutes from './routes/continuousStepRoutes.js';


const app = express();
//const PORT = process.env.PORT || 5000;
const PORT = 5000;

dbConnection();

app.use(bodyParser.json());
// app.use(cors());

app.use(cors({
    origin: '*', // Allow all origins for now; you can restrict this later
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/users', userRoutes);
app.use('/api/steps' , stepRouter);
app.use('/api/bmi' ,    bmiRouter );
app.use('/api/continuous-steps', continuousStepRoutes);

app.use("/",(req,res)=>{
    res.json({message:"hello to my server"});
})



app.listen(PORT , ()=>{
    console.log(`server is running at port ${PORT}`);
})