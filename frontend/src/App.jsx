import "./App.css";
import Navbar from "./components/Navbar.jsx";
// import Card from "./components/Card.jsx";
import EmptyButton from "./components/EmptyButton.jsx";

function App() {
  return (
    <main className="main">
      <Navbar />
      <EmptyButton />
      {/* <Card /> */}
    </main>
  );
}

export default App;
