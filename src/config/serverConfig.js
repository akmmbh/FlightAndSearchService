const dotenv =require('dotenv')
dotenv.config();
console.log('Loaded Port',process.env.PORT);
module.exports={
    PORT:process.env.PORT,
};