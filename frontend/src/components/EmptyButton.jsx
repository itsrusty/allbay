import { Button, Empty } from "antd";
import ButtonUploadFile from "./ButtonUploadFile.jsx";

const App = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        No has subido ningún <a href="#API">Archivo</a>
      </span>
    }
  >
    <ButtonUploadFile />
  </Empty>
);
export default App;
