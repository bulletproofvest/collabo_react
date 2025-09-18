import './App.css';

import MenuItems from './ui/Menuitems';
import AppRoutes from './routes/AppRoutes';

function App() {
  const appName = "IT Academy Coffee Shop";
  return (
    <>
      <MenuItems appName={appName} />

      <AppRoutes />


      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p>&copy; 2025 {appName}. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
