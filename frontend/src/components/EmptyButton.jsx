import { Empty } from "antd";
import ButtonUploadFile from "./ButtonUploadFile.jsx";
import "./styles/EmptyButton.css"

const App = (props) => (
  <Empty
    className="emptyButton"
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Puedes subir un máximo de 100 <a href="#API">Archivos 👍</a>
      </span>
    }
  >
    <ButtonUploadFile />
  </Empty>
);
export default App;
