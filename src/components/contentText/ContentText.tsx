import { FC } from 'react';
import c from 'classnames';
import styles from './contentText.module.scss';

interface Props {
  text: string;
  bold?: boolean;
}

const ContentText: FC<Props> = ({ bold, text }) => {
  return <p className={c(styles.cTstyle)}>{text}</p>;
};

export default ContentText;
