import { useEffect, useState, useCallback, useMemo } from "react";

export default function UsePokemon() {
  const [gotPokemon, setGotPokemon] = useState(undefined);
  const [selectedType, setSelectedType] = useState(undefined);
  const [pokemon, setPokemon] = useState({
    pokemonData: [],
  });

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

  return {
    data,
    selectedType,
    setSelectedType,
  };
}
