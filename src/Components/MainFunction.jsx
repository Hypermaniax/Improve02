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

export default function MainFunction({ type, onClick }) {
  return (
    <div className=" mx-auto w-3/4 flex-col sm:flex-row">
        <h3>Filter by type :</h3>
        <ul className="flex gap-1 flex-wrap">
          {type
            .filter(
              (item) =>
                item.name !== "fighting" &&
                item.name !== "flying" &&
                item.name !== "stellar" &&
                item.name !== "unknown" &&
                item.name !== "fairy" &&
                item.name !== "dark" &&
                item.name !== "ice"
            )
            .map(
              (item, index) => (
                <li
                  onClick={() => onClick(item.name)}
                  style={{
                    backgroundColor: typeColors[item.name] || "#999", // Default color if not found
                    color: "white",
                  }}
                  className="w-20 py-0.5 text-lg text-center bg-slate-400 rounded-lg cursor-pointer"
                  key={index}
                >
                  {item.name} 
                </li>
              ),
              this
            )}
        </ul>
    </div>
  );
}
