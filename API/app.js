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

// aplicando donde será el storage de multer
let storage = multer.diskStorage({
  // con destination se configura donde se guardarán los archivos
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  
  // el nombre se genera utilizando el nombre del campo del archivo y la fecha y hora actual
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

// ? routing
app.use("/items", showItems);
app.use("/auth", login);
app.use("/auth", register);
app.use("/file", uploadFile);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});