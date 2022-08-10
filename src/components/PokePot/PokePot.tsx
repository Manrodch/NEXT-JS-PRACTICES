import { useCallback, FC, useState, useEffect } from 'react';
import { getPokemon } from '../../services/pokemon';
import { pokemonInterface } from './types';

const PokePot: FC = () => {
  const [pokemon, setPokemon] = useState<pokemonInterface | void>();

  const fetchPokemon = async (id: number) => {
    const result: pokemonInterface | void = await getPokemon(id);
    setPokemon(result);
  };

  useEffect(() => {
    fetchPokemon(1);
  }, []);

  return <div>{pokemon?.name && <div>{pokemon.name}</div>}</div>;
};

export default PokePot;
