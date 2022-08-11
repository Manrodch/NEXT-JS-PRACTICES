import React, { FC } from 'react';
import { pokemonInterface } from '../components/PokePot/types';
import Image from 'next/image';

const imageSize = 300;

const PokemonInfo: FC<pokemonInterface> = ({ name, sprites, id }) => {
  return (
    <div>
      <div>id:{id}</div>
      <h1>{name}</h1>
      <Image src={sprites.front_default} width={imageSize} height={imageSize} />
      <Image src={sprites.back_default} width={imageSize} height={imageSize} />
    </div>
  );
};

export default PokemonInfo;
