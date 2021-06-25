require('dotenv').config()
const mongoose = require('mongoose');


const connectdb = async() =>{
    try{
        // mongo connection string
        const con = await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true,
            useUnifiedTopology:true, 
            useFindAndModify:false,
            useCreateIndex:true
        });
        console.log(`mongodb space connected:${con.connection.host}`)
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }

}
module.exports = connectdb 