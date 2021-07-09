import "./../styles.css";

function CadaUm({ elt }) {
  return (
    <article>
      <h2>{elt.name}</h2>
      <figure>
        <img src={elt.image} alt={elt.name} />
        <figcaption>{elt.house}</figcaption>
      </figure>
    </article>
  );
}
export default CadaUm;
