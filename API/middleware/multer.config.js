import multer from "multer";

export const uploadFiles = () => {
  // objeto de multer para configuar donde se guardará el archivo
  const storage = multer.diskStorage({
    // donde se almacenará el archivo
    destination: "./uploads",
    filename: (_req, file, cb) => {
      let extension = file.originalname.slice(file.originalname.lastIndexOf("."))
      cb(null, Date.now() + extension);
    },
  });

  let upload = multer({ storage: storage }).single("file")

  return upload
};