import { FC } from 'react';

import styles from './titleB.module.scss';

interface props {
  text: string;
  bold?: boolean;
  fontFamily?: string;
}

const TitleB: FC<props> = ({ text, bold = false, fontFamily }) => {
  return;

  <div>
    <h2>
      {' '}
      {text} {bold}
      {fontFamily}{' '}
    </h2>
    ;
  </div>;
};

export default TitleB;
