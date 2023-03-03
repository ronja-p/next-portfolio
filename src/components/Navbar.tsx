import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={styles.nav__links}>
        <Link className={styles.nav__link} href="/about">
          About
        </Link>
        <Link className={styles.nav__link} href="/projects">
          Projects
        </Link>
        <Link className={styles.nav__link} href="/contact">
          Contact
        </Link>
      </div>
      <Link className={styles.nav__logo} href="/">
        {'{ronja.p}'}
      </Link>
    </nav>
  );
};

export default Navbar;
