
const dotenv = require('dotenv');
dotenv.config();
const  express = require('express')
const mongoose = require('mongoose')
const  cors = require('cors')
const router = require('./routes/user-routes')
const cookieParser = require('cookie-parser')
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173'
}));
app.use('/api',router)
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

// database connection
const connectDb = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
connectDb().then(r =>console.log('Connected to Database'));
app.listen(PORT)