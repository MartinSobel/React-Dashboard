import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Status from './components/Status';

import './style.css';
import React from 'react'

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
    
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <Status />

          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
