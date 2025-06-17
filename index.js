const express = require ('express');
const pelisRoutes = require('./routes/pelisRoutes');
const cors = require('cors');
const app = express();
const connectDB = require('./data/config');
const passport = require('passport');
const configurePassport = require('./config/passport'); // ajusta la ruta si es diferente

const PORT = 3000;
app.use(cors());
app.use(express.json());

configurePassport(passport);
app.use(passport.initialize());


app.use('/pelis', pelisRoutes);
connectDB()

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto '+ PORT )
})