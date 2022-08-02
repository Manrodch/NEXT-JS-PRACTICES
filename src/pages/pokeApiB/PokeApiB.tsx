import { FC, useEffect, useState } from 'react';
import TitleB from '../../components/titleB';

interface pokemonInterface {
  id: number;
  name: string;
  sprites: pokeSprites;
}
interface pokeSprites {
  front_default: string;
  back_default: string;
}

export const PokeApiB = () => {
  const [pokemon, setPokemon] = useState<pokemonInterface>();
  const [id, setId] = useState(1);
  console.log(pokemon);
  const handleNext = () => {
    setId(id + 1);
  };
  const handleprevious = () => {
    id > 1 && setId(id - 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  if (!pokemon) return <p>no profile</p>;
  return (
    <div>
      <TitleB text="Poke api, Fetch method" />
      <hr />
      <h3> {pokemon.name} </h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      <hr />
      <button onClick={handleprevious} disabled={id === 1}>
        previous
      </button>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default PokeApiB;
