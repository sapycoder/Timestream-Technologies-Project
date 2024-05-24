const express = require('express');
const mysql = require('mysql')
const chemicalRouter = require('./routes/chemical_route.js');

const app = express();

const db = require('./models')

// Take your database configuration in Json format from external
app.use(express.json()) 

//Routes
app.use('/api/chemicals', chemicalRouter);


//Database Connection
const connect = () => {
    try{
        db.sequelize.sync().then(
            console.log("Connected to SQL Database")
        )
    }
    catch(err){
        console.log(`Error connecting to SQL database. Error: `,err)
    }
}
app.listen(2301, () => {
    connect();
    console.log("Connected to Server")
});
