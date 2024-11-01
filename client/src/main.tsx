import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, Footer } from './components/layout';
import { ToTopButton } from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes as PageRoutes } from './data/routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

function App() {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar 
      />
      
      <Routes>
        {
          PageRoutes.map(route => (
            <Route 
              path={route.path}
              element={<route.pageElement />}
            />
          ))
        }
      </Routes>
      
      
      <ToTopButton />

      <Footer />

      
    </div>
  )
}

export default App
