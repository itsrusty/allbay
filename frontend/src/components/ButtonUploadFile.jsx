import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const App = () => {
  const [fileList, setFileList] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });

    // envía la petición con el FormData a la ruta que manejará la subida de la imagen
    // const response = await fetch("http://localhost:5000/upload/file", {
    //   method: "POST",
    //   body: formData,
    // });
    // console.log(response);
  };

  const handleFileListChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <>
      <Upload
        name="files"
        action="http://localhost:5000/upload/file" // ruta que manejará la subida de la imagen
        listType="picture"
        fileList={fileList}
        onChange={handleFileListChange}
        className="upload-list-inline"
      >
        <Button icon={<UploadOutlined />}>Subir imagen</Button>
      </Upload>
      {fileList.length > 0
        ? console.log("archivo subido!")
        : console.log("vacío")}

    </>
  );
};

export default App;