import { Pagination } from "antd";
import "./styles/filesPagination.css"

const App = () => <Pagination className="pagination" defaultCurrent={1} total={50} />;
export default App;
