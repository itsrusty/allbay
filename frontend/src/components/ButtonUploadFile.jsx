import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import AlertSuccess from "./error/AlertSuccess.jsx";
import AlertEmpty from "./error/AlertEmpty.jsx"

const App = () => {
  const [fileList, setFileList] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("image", file.originFileObj);
    });
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

        <div>
          {fileList.length > 0 ? (
            <AlertSuccess></AlertSuccess>
          ) : (
            <span></span>
            // <AlertEmpty />
            // <Button icon={<UploadOutlined />}>Subir imagen</Button>
          )}
        </div>
      </Upload>
    </>
  );
};

export default App;
