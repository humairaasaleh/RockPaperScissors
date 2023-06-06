import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';

// This component loads the Navigation Bar at the top of the pages
function NavMenu() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav>
          <Nav.Link href="/">Welcome</Nav.Link>
          <Nav.Link href="/game">Play Game</Nav.Link>
          <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavMenu;