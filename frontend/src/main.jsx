import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import NavBar from './components/NavBar';
import JobList from './components/JobList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <div>
      <NavBar />
      <JobList />
    </div>
  )
}

export default App
