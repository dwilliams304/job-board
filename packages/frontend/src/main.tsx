import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, Footer } from './components/layout';
import { ToTopButton } from './components';
import { 
  JobBoard,
  JobPage,
  CompanyPage,
  Login, 
  Signup,
  Profile,
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
    <div className='flex flex-col min-h-screen'>
      <NavBar 
      />
      
      <Routes>
        <Route path="/" index element={<JobBoard /> } />
        <Route path="/job/:jobID" index element={<JobPage /> } />
        <Route path="/company/:companyID" index element={<CompanyPage /> } />
        <Route path="login" element={
          <Login 
            // signIn={signIn}
          />
        } />
        <Route path="signup" element={
          <Signup 
            
          />
        } />
        <Route path="profile" element={
          <Profile 
          />
        } />
        <Route path="help" element={<Help /> } />
        <Route path="terms" element={<Terms /> } />
        <Route path="privacy" element={<Privacy /> } />
        <Route path="*" element={<NotFound /> } />
      </Routes>
      
      
      <ToTopButton />

      <Footer />

      
    </div>
  )
}

export default App
