import { FC } from 'react';
import ContentText from '../../components/contentText';
import TitleMain from '../../components/titleMain';
import PokeApiB from '../pokeApiB';
import styles from './landing.module.scss';

const Landing: FC = () => {
  return (
    <div>
      <div className={styles.sectionAstyle}>
        <div className={styles.cA}>
          <TitleMain text="Boom chakalala boom" />
          <ContentText text="I just wanna fuck bitches and smoke pot " />
        </div>
        <div className={styles.cB}>imagen</div>
      </div>
      <PokeApiB />
    </div>
  );
};

export default Landing;
