import * as React from 'react'
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import { fetchData } from './data/dataSlice';
import { RepoLinks } from './data/featuredcards';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    RepoLinks.map((x) => dispatch(fetchData(x)));
  }, [])
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
