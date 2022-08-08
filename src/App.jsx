import './App.css';
import Navbar from './components/Navbar/Navbar';
import Contact from './Views/Contact/Contact';
import Home from './Views/Home/Home';
import Portfolio from './Views/Portfolio/Portfolio';
import Posts from './Views/Posts/Posts';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Portfolio />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
