import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar data-bs-theme="dark" className="bg-body-tertiary">
    <Container>
      <Link className="navbar-brand" to="/">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Electricity
      </Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      <Link className="nav-link" to="/currentprice">KM+</Link>

    </Container>
  </Navbar>
  )
}

export default Navigation;