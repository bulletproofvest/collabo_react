import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';

import MenuItems from './ui/Menuitems';
import AppRoutes from './routes/AppRoutes';

function App() {
  const appName = "IT Academy Coffee Shop";
  return (
    <>

    
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href='/'>{appName}</Navbar.Brand>
          <Nav className="me-auto">
            <MenuItems>
            </MenuItems>
          </Nav>
        </Container>
      </Navbar>

      <AppRoutes />


      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>&copy; 2025 {appName}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
