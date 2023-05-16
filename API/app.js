import express, { json } from "express";
import cors from "cors";
import getFiles from "./routes/files/getFiles.js";

// routes
import showItems from "./routes/showItems.js";
import login from "./routes/auth/login.js";
import register from "./routes/auth/register.js";
import uploadFile from "./routes/files/uploadFile.js";

// config server
const app = express();

// config port
const PORT = 5000;

// middlewares
app.use(express.json());
app.use(cors());
// app.use(fileUpload())

// ? routing
app.use("/items", showItems);
app.use("/item",getFiles)
app.use("/auth", login);
app.use("/auth", register);
app.use("/upload", uploadFile);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});