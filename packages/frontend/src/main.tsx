import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, Footer } from'./layout';
import { JobBoard, Login } from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<JobBoard /> } />
        <Route path="login" index element={<Login />} />
      </Routes>

      <Footer />

    
    </BrowserRouter>
  )
}

export default App
