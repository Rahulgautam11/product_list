import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProducForm from './component/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={ProductList} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
