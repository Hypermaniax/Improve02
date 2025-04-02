const typeColors = {
  normal: "#A8A77A",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  dragon: "#6F35FC",
};
export default function Card({ pokemon, type }) {
  // console.log(type);
  
  return (
    <div className="h-auto mt-5 gap-2 w-full md:px-5 justify-center md:gap-5 flex-wrap rounded-lg flex"> 
      {pokemon.map((item, key) => (
        <div
          key={key}
          className="mt-4 w-28 p-2 bg-white md:w-52 rounded-lg shadow-xl items-center"
        >
          <img
            className="md:h-56 dark:shadow-gray-800 mx-auto  bg-gray-300 rounded-xl "
            src={item.pokeImg}
            alt={item.pokeName}
          />
          <div className="flex justify-between" >
            <p className="text-lg " >
              #{item.pokeId}
            </p>
            <p className="text-lg" >
              EXP: {item.pokeXp}
            </p>
          </div>
          <p className="text-2xl mt-1 ">{item.pokeName}</p>
          <p
            style={{
              backgroundColor: typeColors[type] || "#999", // Default color if not found
              color: "white",
              
            }}
            className="text-xl text-center rounded-lg cursor-pointer w-2/4 "
          >
            {type}
          </p>
        </div>
      ))}
    </div>
  );
}
