import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <div>
      <NavBar />
      <SearchBar />
      <JobList />
    </div>
  )
}

export default App
