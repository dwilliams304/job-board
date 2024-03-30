import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import NavBar from './components/NavBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function App() {

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App
