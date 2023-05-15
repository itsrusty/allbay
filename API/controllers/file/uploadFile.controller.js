// import multerConfig from "../../middleware/multer.config.js"
export const upload = async (req, res) => {
  try {
    console.log(req.files)
    res.json({
      "message": "Upload!"
    })
    
  } catch (error) {
    res.status(500).json({ "error": error });
  }
};
