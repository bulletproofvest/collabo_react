import { Route, Routes } from "react-router-dom";

import HomePage from './../pages/HomePage';
import FruitOne from './../pages/FruitOne';
import FruitList from './../pages/FruitList';
import Element from './../pages/Element';
import ElementList from './../pages/ElementList';
import SignupPage from './../pages/SignupPage';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/member/signup' element={<SignupPage />} />
            <Route path='/fruit' element={<FruitOne />} />
            <Route path='/fruit/list' element={<FruitList />} />
            <Route path='/element' element={<Element />} />
            <Route path='/element/list' element={<ElementList />} />
        </Routes>
    );
}

export default App;