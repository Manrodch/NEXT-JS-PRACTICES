import { FC } from 'react';
import c from 'classnames';
import styles from './titleB.module.scss';

interface Props {
  text: string;
  bold?: boolean;
}

const TitleB: FC<Props> = ({ text, bold = false }) => {
  return <h2 className={c(styles.titleBstyle, bold)}>{text}</h2>;
};

export default TitleB;
