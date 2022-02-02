/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import Auth from './auth'

dotenv.config();

/**
 * App Variables
 */
const PORT: number = 5000

const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors({
    origin: ["http://localhost:3000"]
}));
app.use(express.json());

app.use('/api/auth', Auth)

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
