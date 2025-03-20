import { useCallback, useEffect, useMemo, useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [pokemonType, setpokemonType] = useState(undefined);
  const [selectedType, setSelectedType] = useState(undefined);
  const [gotPokemon, setGotPokemon] = useState(undefined);
  const [pokemon, setPokemon] = useState({
    pokemonData: [],
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type/");
      const json = await response.json();

      setpokemonType(json.results);
    })();
  }, []);

  const fetchingPokemon = useCallback(() => {
    return !!selectedType
      ? (async () => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/type/${selectedType}`
          );
          const json = await response.json();
          setGotPokemon(json.pokemon.map((item) => item.pokemon.name));
        })()
      : [];
  }, [selectedType]);

  const data = useMemo(() => {
    return pokemon.pokemonData.map((item) => item);
  }, [pokemon]);

  useEffect(() => {
    setPokemon({
      pokemonData: [],
    });
  }, [gotPokemon]);

  // run if
  useEffect(() => {
    fetchingPokemon();
  }, [fetchingPokemon]);

  useEffect(() => {
    if (!gotPokemon) return;
    (async () => {
      await Promise.all(
        gotPokemon.map(async (item) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${item}`
          );  
          const json = await response.json();
          
          setPokemon((prev) => {
            const imgData = json.sprites.front_default;
            const nameData = json.name;
            const xp = json.base_experience;
            const id = json.id;

            // console.log(nameData);z

            return {
              ...prev,
              pokemonData: [
                ...prev.pokemonData,
                {
                  pokeName: nameData,
                  pokeImg: imgData,
                  pokeXp: xp,
                  pokeId: id,
                },
              ],
            };
          });
        })
      );
    })();
  }, [gotPokemon]);

  return (
    <>
      <Header />
      {!!pokemonType && (
        <Main
          type={pokemonType}
          selected={selectedType}
          pokemon={data}
          onClick={setSelectedType}
        />
      )}
    </>
  );
}

export default App;
