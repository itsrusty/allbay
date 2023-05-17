import bcrypt from "bcrypt";
import { Pool } from "../../config/conex.js";

export const registerUser = async (req, res) => {
  try {
    // obteniendo datos del usuario
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // enviando datos a la database
    const [rows] = await Pool.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [username, email, hashPassword]
    );

    // validar si se ha enviado la data o no
    rows ? res.json({ data: "success!" }) : res.json({ data: "error" });

  } catch (error) {
    res.json("error", error);
  }
};