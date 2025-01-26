import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './db/dbConnection.js';
import beneficiaryRoutes from './routes/beneficiaryRoutes.js';
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Connect to MongoDB
dbConnection();
// Routes

// Authentication routes
app.use("/api/auth", authRoutes);

// Beneficiary routes
app.use("/api/beneficiaries", beneficiaryRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Beneficiary Management App!');
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
