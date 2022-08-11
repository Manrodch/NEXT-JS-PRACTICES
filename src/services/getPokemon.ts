import { pokemonInterface } from '../components/PokePot/types';

export const getPokemon = async (id: number): Promise<pokemonInterface> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

export const getPokemonByName = async (name: string): Promise<pokemonInterface> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/picachu`);
  const data = await response.json();
  console.log(data);
  return data;
};
