import { Link } from "react-router-dom";
import { RoutesApp } from "./routes";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <RoutesApp />
    </div>
  );
};

export default App;
