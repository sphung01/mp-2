export interface PokemonInfo {
  id: number;
  name: string;
  sprites: {
    other: {
      showdown: {
        front_default: string;
      };
    };
  };
  stats: StatProps[];
  weight: number;
  height: number;
  cries: {
    latest: string;
  }
}

export interface StatProps{
    base_stat: number; stat: { name: string };
}
