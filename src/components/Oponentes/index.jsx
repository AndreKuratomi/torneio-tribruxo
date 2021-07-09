import "./../styles.css";
// import { useState } from "react";

import CadaUm from "./../CadaUm";
import Inicio from "./../Inicio";

function Oponentes({ isLoggedIn, Login, Logout, bruxinhos }) {
  //   const [random3, setRandom3] = useState([]);
  return isLoggedIn === false ? (
    <main>
      <section className="galeria">
        {bruxinhos &&
          bruxinhos.slice(1, 4).map((elt) => (
            <section className="oponentes">
              <CadaUm key={elt.id} elt={elt} />
            </section>
          ))}
      </section>
      <button onClick={Logout}>Selecionar novamente</button>
    </main>
  ) : (
    <Inicio
      bruxinhos={bruxinhos}
      isLoggedIn={isLoggedIn}
      Login={Login}
      Logout={Logout}
    />
  );
}

export default Oponentes;
