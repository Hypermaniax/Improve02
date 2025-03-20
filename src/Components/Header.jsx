import PokeApi from "../Assets/PokeApi.svg";

export default function Header() {
  return (
    <header className="mt-2">
      <img
        src={PokeApi}
        className="h-14 mb-3 md:h-32  mx-auto"
        alt="PokeApi Images"
      />
    </header>
  );
}
