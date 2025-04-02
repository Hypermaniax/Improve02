import { useEffect, useState } from "react";

export function useIntialFetch() {
  const [pokemonType, setpokemonType] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://pokeapi.co/api/v2/type/");
      const json = await response.json();
      setpokemonType(json.results);
    })();
  }, []);

  return pokemonType;
}