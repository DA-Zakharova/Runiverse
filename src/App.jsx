import { useEffect } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from './redux/favoritesSlice';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Races from './pages/Races';
import Plans from './pages/Plans';
import Gear from './pages/Gear';
import Club from './pages/Club';
import Footer from './components/Footer';
import Favorites from './pages/Favorites';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(state => state.favorites.items);

  useEffect(() => {
    const saved = localStorage.getItem("runiverse_favorites");

    if (!saved) return;
    try {
      const parsed = JSON.parse(saved);
      dispatch(setFavorites(parsed));
    } catch (error) {
      localStorage.removeItem("runiverse_favorites")
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(
      "runiverse_favorites",
      JSON.stringify(favoriteItems)
    );
  }, [favoriteItems]);

  return (
    <Router>
      <div className="app">
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/club" element={<Club/>}/>
          <Route path="/plans" element={<Plans/>}/>
          <Route path="/races" element={<Races/>}/>
          <Route path="/gear" element={<Gear/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
