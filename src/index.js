import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route element={<Landing />} index />
        </Route>
      </Routes>
    </BrowserRouter>
);
