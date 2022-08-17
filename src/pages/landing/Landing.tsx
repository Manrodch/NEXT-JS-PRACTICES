import { FC, useState, useEffect } from 'react';
import { getPokemon, getPokemonByName } from '../../services/getPokemon';
import { pokemonInterface } from '../../components/PokePot/types';
import PokemonInfo from '../../components/PokemonInfo';

const Landing: FC = () => {
  const [pokemon, setPokemon] = useState<pokemonInterface | null>(null);
  const [id, setId] = useState<number>(1);
  // const [pokemonName, setPokemonName] = useState<pokemonInterface | null>(null);
  const [search, setSearch] = useState<string>('');

  const nextPokemon = () => {
    setId(id + 1);
  };
  const prevPokemon = () => {
    id > 1 && setId(id - 1);
  };

  useEffect(() => {
    getPokemon(id).then((data) => setPokemon(data));
  }, [id]);

  useEffect(() => {
    getPokemonByName(search).then((data) => setPokemon(data));

    console.log(search);
  }, [search]);

  return (
    <div>
      <input
        type="search"
        placeholder="Pokemon Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div onClick={() => nextPokemon()}>Next</div>
      <div onClick={() => prevPokemon()}>Previous</div>
      {pokemon && (
        <PokemonInfo id={pokemon.id} sprites={pokemon.sprites} name={pokemon.name} />
      )}
    </div>
  );
};

// const changeInput = (value: string) => {
//   setSearch(value);
// };
// setId((id) =>  id + 1);
// id > 1 && setId(id - 1);
// const cuandoledesalboton = (quepalabrabuscar: string) => {
//   // getNuevafuncionquenohecreado(quepalabrabuscar)
// };

// useEffect(() => {
//   setTimeout(() => {
//     console.log('cambio search');
//     // hay que crear func quye busca poke por nombre
//     // getByName(search).then(data=> setPokemon(data))
//   }, 2000);
// }, [search]);
{
  /* pendiente */
}
{
  /* <button onClick={() => cuandoledesalboton(search)} /> */
}
{
  /* <input type="text" value={search} onChange={(e) => changeInput(e.target.value)} /> */
}

export default Landing;
