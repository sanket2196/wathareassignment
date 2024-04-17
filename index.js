import express, { request, response } from 'express';
import { PORT , DBURL } from './config.js';
import mongoose from 'mongoose';
// import cors from 'cors';


 
const app = express();
app.use(express.json());

app.use(cors());

app.get('/',(request,response)=>{
   console.log(request);
   return response.status(235).send('welocome')
});

mongoose.connect(DBURL)
.then(()=>{
    console.log(`App is connected to databases`);

app.listen(PORT ,()=>{
    console.log(`App is listening to port:${PORT}`)
}); 
})
.catch((error)=>
{
    console.log(error)
});

 