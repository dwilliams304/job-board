import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, Footer } from './components/layout';
import { ToTopButton } from './components';
import { 
  JobBoard,
  JobPage,
  Login, 
  Help, 
  Terms, 
  Privacy, 
  NotFound 
} from './components/pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

function App() {
  
  return (
    <body className='flex flex-col min-h-screen'>
      <NavBar />
      
      <Routes>
        {/* <Route path="/" index element={<JobBoard /> } /> */}
        <Route path="/" index element={<JobPage /> } />
        <Route path="login" element={<Login />} />
        <Route path="help" element={<Help /> } />
        <Route path="terms" element={<Terms /> } />
        <Route path="privacy" element={<Privacy /> } />
        <Route path="*" element={<NotFound /> } />
      </Routes>
      
      
      <ToTopButton />

      <Footer />

      
    </body>
  )
}

export default App
