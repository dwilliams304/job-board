import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, Footer } from'./layout';
import { JobBoard, Login, Help, Terms, Privacy, NotFound } from './pages';

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
          <Route path="/" index element={<JobBoard /> } />
          <Route path="login" element={<Login />} />
          <Route path="help" element={<Help /> } />
          <Route path="terms" element={<Terms /> } />
          <Route path="privacy" element={<Privacy /> } />
          <Route path="*" element={<NotFound /> } />
        </Routes>

        <Footer />

      
      </BrowserRouter>
    </body>
  )
}

export default App
