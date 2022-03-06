import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';
import Header from './components/Header/Header';
import SignIn from './pages/SignIn';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route exact path="/" element={<Header />}></Route>
          <Route path="/netflixshow" element={<NetflixShow />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
