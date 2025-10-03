// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

//  Connects to MongoDB
await connectDB();

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

//Default route
app.get('/',(req,res)=>{
  res.send('Welcome to express App!')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
