import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Dashboard</Link>
      <Link to="/add">Add Beneficiary</Link>
    </nav>
  );
};

export default Navbar;
