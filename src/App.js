import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Material from "./Components/Material/Material";
import ReactBootstrap from "./Components/ReactBootstrap/ReactBootstrap";

function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bootstrap">React Bootstrap</Link>
            </li>
            <li>
              <Link to="/material">Material UI</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/bootstrap" element={<ReactBootstrap />}></Route>
            <Route path="/material" element={<Material />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
