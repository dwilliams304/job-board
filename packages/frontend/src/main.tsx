import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, Footer } from'./layout';
import { JobBoard, Login, Help } from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <body className='flex flex-col min-h-screen'>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<JobBoard /> } />
          <Route path="login" index element={<Login />} />
          <Route path="help" element={<Help /> } />
        </Routes>

        <Footer />

      
      </BrowserRouter>
    </body>
  )
}

export default App
