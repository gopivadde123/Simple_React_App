import "./App.css";
import Home from "./home";
import Detail from "./detail";
import CheckOut from "./checkout";
import Navbar from "./navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  return (
    <div className="App bgcolor">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/detail" exact Component={Detail}></Route>
          <Route path="/checkout" exact Component={CheckOut}></Route>
          <Route path="/home" exact Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
