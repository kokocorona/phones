import logo from './logo.svg';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Page404 from './pages/Page404';
import PhonesListPage from './pages/PhonesListPage';
import PhoneInfo from './pages/PhoneInfo';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/phones" element={<PhonesListPage />} />
        <Route path="/phones/:id" element={<PhoneInfo />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
