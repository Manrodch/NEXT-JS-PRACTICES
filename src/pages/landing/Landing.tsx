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
          <TitleMain text="2 multimedia Designer breakingtrouhg the fullstack development" />
          <ContentText text="we are tired of working on this graphics shit in argentina so now we are studying to get out of this fucking place, to fuck whores and smoking pot" />
        </div>
        <div className={styles.cB}>imagen</div>
      </div>
      <PokeApi />
    </div>
  );
};

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState(null);
  console.log({ pokemon });
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      });
  }, []);

  return (
    <div>
      <TitleB text="Poke api, Fetch method" />
      <hr />
      {pokemon && <div></div>}
    </div>
  );
};

export default Landing;
