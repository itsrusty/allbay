import { Button, Space } from "antd";
import "./styles/pagination.css";

function data() {
  console.log("ldñsdkl");
}
const App = () => (
  <Space wrap className="button-pagination">
    <Button type="primary" onClick={data}>
      Ver archivos
    </Button>
  </Space>
);
export default App;