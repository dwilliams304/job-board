import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NavBar, JobList, SearchBar } from'./components';

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
