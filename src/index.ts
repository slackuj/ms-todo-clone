import express from "express";
import routes from "./routes";
import { errorHandler } from "./middlewares/errorHandler";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();
/*const corsOptions = {
    origin: "http://localhost:5173",
    method: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    // credentials: true
};*/

// parse json in req
app.use(express.json());
//app.use(cors(corsOptions));
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// routes are defined here
app.use("/api", routes);

// generic error handler
app.use(errorHandler);

export default app;