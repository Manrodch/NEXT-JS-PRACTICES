import TitleB from '../titleB';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.navBarStyles}>
      <TitleB text="Soy Navbar" bold />
    </div>
  );
};

export default Navbar;
