import Header from "./Components/Header";
import Main from "./Components/Main";
import { useIntialFetch } from "./hooks/UseFetching";
import usePokemon from "./hooks/UsePokemonFetch";

function fetcData() {
  const data = useIntialFetch();

  return data;
}

function App() {
  const type = fetcData();
  const { setSelectedType,data,selectedType } = usePokemon();
  console.log(data.length);
  
  return (
    <>
      <Header />
      {!!type && (
        <Main
          type={type}
          selected={selectedType}
          pokemon={data}
          onClick={setSelectedType}
        />
      )}
    </>
  );
}

export default App;
