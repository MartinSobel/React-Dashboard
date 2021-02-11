import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import './style.css';
import React from 'react'

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
    
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
        </div>
      </div>
    </div>
  );
}

export default App;
