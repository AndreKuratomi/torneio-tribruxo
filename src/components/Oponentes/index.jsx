import "./../styles.css";

import CadaUm from "./../CadaUm";
import Inicio from "./../Inicio";

import { useState, useEffect } from "react";

function Oponentes({ isLoggedIn, Login, Logout, bruxinhos }) {
  const [random3, setRandom3] = useState([]);
  useEffect(() => {
    randomThree();
  }, []);

  const randomThree = () => {
    let bruxoG = [];
    let bruxoR = [];
    let bruxoH = [];

    for (let count = 0; count < bruxinhos.length; count++) {
      if (bruxinhos[count].house === "Gryffindor") {
        bruxoG.push(bruxinhos[count]);
      }
      if (bruxinhos[count].house === "Slytherin") {
        bruxoR.push(bruxinhos[count]);
      }
      if (
        bruxinhos[count].house === "Ravenclaw" ||
        bruxinhos[count].house === "Hufflepuff"
      ) {
        bruxoH.push(bruxinhos[count]);
      }

      //
    }

    let bruxo1 = bruxoG[Math.floor(Math.random() * 5)];
    let bruxo2 = bruxoR[Math.floor(Math.random() * 3)];
    let bruxo3 = bruxoH[Math.floor(Math.random() * 3)];

    let oponentes = [];
    oponentes.push(bruxo1);
    oponentes.push(bruxo2);
    oponentes.push(bruxo3);

    setRandom3(oponentes);
  };

  return isLoggedIn === false ? (
    <main>
      <section className="galeria">
        {random3 &&
          random3.map((elt) => (
            <section className="oponentes">
              <CadaUm key={elt.id} elt={elt} />
            </section>
          ))}
      </section>
      <button onClick={randomThree}>Não agradou? Selecione novamente!</button>
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
