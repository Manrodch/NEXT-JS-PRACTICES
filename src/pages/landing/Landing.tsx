import { FC, useState, useEffect } from 'react';
import ContentText from '../../components/contentText';
import TitleMain from '../../components/titleMain';
import PokeApiB from '../pokeApiB';
import PokePot from '../../components/PokePot/PokePot';

import styles from './landing.module.scss';

const Landing: FC = () => {
  return (
    <div>
      <div className={styles.sectionAstyle}>
        <div className={styles.cA}>
          <TitleMain text="Boom chakalala boom" />
          <ContentText text="ON DA WAY" />
        </div>
        <div className={styles.cB}>imagen</div>
      </div>
      <PokeApiB />
      <PokePot />
    </div>
  );
};

export default Landing;
