import { FC, useEffect, useState } from 'react';
import ContentText from '../../components/contentText';
import TitleB from '../../components/titleB';
import TitleMain from '../../components/titleMain';
import styles from './landing.module.scss';

const Landing: FC = () => {
  return (
    <div>
      <div className={styles.sectionAstyle}>
        <div className={styles.cA}>
          <TitleMain text="2 multimedia Depgner breakingtabilities the fullstack development" />
          <ContentText text="we are tired of working on this graphics shit in argentina so now, we are studying to get out of this fucking place, to fuck whores and smoke pot" />
        </div>
        <div className={styles.cB}>imagen</div>
      </div>
      <PokeApi />
      <EldenApi />
    </div>
  );
};

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [id, setID] = useState(45);
  useEffect(() => {
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!pokemon) return <p>no profile</p>;
  return (
    <div>
      <TitleB text="Poke api, Fetch method" />
      <hr />
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.frontdefault} alt={pokemon.name} />
    </div>
  );
};

export const EldenApi = () => {
  const [elden, setElden] = useState(null);
  console.log(elden);

  useEffect(() => {
    fetch('https://eldenring.fanapis.com/api/items?limit=2')
      .then((response) => response.json())
      .then((data) => setElden(data));
  }, []);
  return <div></div>;
};

export default Landing;
