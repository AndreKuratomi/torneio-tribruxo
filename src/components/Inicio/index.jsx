import "./../styles.css";

import Oponentes from "./../Oponentes";

function Inicio({ isLoggedIn, Login, Logout, bruxinhos }) {
  return isLoggedIn === true ? (
    <header>
      <h1>Preparativos para o Torneio tribruxo</h1>
      <p>Aperte no botão a seguir para selecionar 3 oponentes!</p>
      <button onClick={Login}>Selecione os 3 oponentes!</button>
    </header>
  ) : (
    <Oponentes
      bruxinhos={bruxinhos}
      isLoggedIn={isLoggedIn}
      Login={Login}
      Logout={Logout}
      // random3={random3}
      // randomThree={randomThree}
    />
  );
}

export default Inicio;
