// module.exports = {
//     JWT_SECRET: 'your_secret_key'
// }


require('dotenv').config();

//dotenv global variables 

const MONGO_CONNECTION_URI = process.env.MONGO_CONNECTION_URI;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
const API_PORT = process.env.API_PORT;

const JWT_SECRET =  'your_secret_key'

module.exports = {
    MONGO_CONNECTION_URI,
    MONGO_PORT,
    MONGO_DB_NAME,
    API_PORT,
    JWT_SECRET
}