import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import Inicio from "./components/Inicio";
// import Oponentes from "./components/Oponentes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const Login = () => {
    setIsLoggedIn(false);
  };

  const Logout = () => {
    setIsLoggedIn(true);
  };

  const [bruxinhos, setBruxinhos] = useState([]);
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setBruxinhos(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Inicio
          bruxinhos={bruxinhos}
          isLoggedIn={isLoggedIn}
          Login={Login}
          Logout={Logout}
        />
      </div>
    </div>
  );
}

export default App;
