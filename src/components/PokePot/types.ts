export interface pokemonInterface {
  id: number;
  name: string;
  sprites: pokeSprites;
}

export interface pokeSprites {
  front_default: string;
  back_default: string;
}
