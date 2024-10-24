import React, {useEffect, useState} from 'react';
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
import { User } from './data/users';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>();

  useEffect(() => {
    setLoggedIn(localStorage.getItem('user') ? true: false);
  }, [])

  const signIn = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    setLoggedIn(true);
  }
  const signOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  }

  
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar 
        loggedIn={loggedIn}
      />
      
      <Routes>
        <Route path="/" index element={<JobBoard /> } />
        <Route path="/job/:jobID" index element={<JobPage /> } />
        <Route path="/company/:companyID" index element={<CompanyPage /> } />
        <Route path="login" element={
          <Login 
            signIn={signIn}
          />
        } />
        <Route path="signup" element={
          <Signup 
            
          />
        } />
        <Route path="profile" element={
          <Profile 
            signOut={signOut}
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
