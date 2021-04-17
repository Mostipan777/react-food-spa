import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav
      className={
        'header navbar navbar-dark bg-secondary d-flex justify-content-between'
      }
    >
      <Link className="navbar-brand fs-4" to="/">
        React Food
      </Link>
      <div className={'fs-5'}>
        <Link className="navbar-brand fs-6" to="/about">
          About
        </Link>
        <Link className="navbar-brand fs-6" to="contacts">
          Contacts
        </Link>
      </div>
    </nav>
  );
}

export default Header;
