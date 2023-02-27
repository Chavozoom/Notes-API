import express from "express";
import noteRoute from "./src/routes/note.route.js";
import connectDatabase from "./src/database/db.js";
import swaggerRoute from "./src/routes/swagger.route.js";
import dotenv from "dotenv";
dotenv.config();

connectDatabase();
const app = express();
app.use(express.json());

app.use("/note", noteRoute);
app.use("/doc", swaggerRoute);

const port = process.env.PORT || 8080;

app.listen(port, console.log(`App is running at port ${port}`));
