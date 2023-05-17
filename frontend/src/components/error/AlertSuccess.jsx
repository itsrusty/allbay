import "./styles/alert.css"
import { Alert, Space } from "antd";

const App = () => (
  <Space
    direction="vertical"
    className="alert"
    style={{
      width: "100%",
    }}
  >
    <Alert
      message="Enviado"
      description="Archivo subido con éxito!"
      type="success"
      showIcon
    />

    {/* info alert */}
    {/* <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    /> */}

    {/* warning alert */}
    {/* <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    /> */}

    {/* error alert */}
    {/* <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    /> */}
  </Space>
);
export default App;
