import "./App.css";
import Navbar from "./components/Navbar.jsx";
// import Card from "./components/Card.jsx";
import EmptyButton from "./components/EmptyButton.jsx";
import Home from "./components/Home.jsx"
import Table from "./components/Table.jsx"

function App() {
  return (
    <main className="main">
      <Navbar />
      <Table></Table>
      <Home></Home>
      <EmptyButton />
    </main>
  );
}

export default App;