import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CityDetail from './components/CityDetail';
import FullHomePage from './components/FullHomePage';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
        <Routes>
          <Route path="/" element={<FullHomePage />} />
          <Route path="/details" element={<CityDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
