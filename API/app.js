import express, { json } from "express";
import cors from "cors";
import multer from "multer";

// routes
import showItems from "./routes/showItems.js";
import login from "./routes/auth/login.js";
import register from "./routes/auth/register.js";
import uploadFile from "./routes/files/uploadFile.js";

// config server
const app = express();

// config port
const PORT = 3000;

// middlewares
app.use(express.json());
app.use(cors());

// ? routing
app.use("/items", showItems);
app.use("/auth", login);
app.use("/auth", register);
app.use("/file", uploadFile);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});