import Card from "./Card";
import MainFunction from "./MainFunction";

export default function Main({ type, onClick, pokemon ,selected}) {

  return (
    <main className="mx-auto mb-10 w-3/4 ">
      <MainFunction type={type} onClick={onClick} />
      {pokemon.length >=1  && <Card type={selected} pokemon ={pokemon} />}
    </main>
  );
}
