import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Status from './components/Status';
import Last from './components/Last';
import Category from './components/Category';
import Product from './components/Product';
import Footer from './components/Footer';

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
            <div class="row">
            
            <Status
              data={[{
                'titulo':'Products in Data Base',
                'cifra':'135',
                'color':'primary',
                'icono':'fa-clipboard-list'
              },
              {
                'titulo':'Amount in products',
                'cifra':'$546.456',
                'color':'success',
                'icono':'fa-dollar-sign'
              },
              {
                'titulo':'Users quantity',
                'cifra':'38',
                'color':'warning',
                'icono':'fa-user-check'
              }]}/>
            </div>
            <div class="row">
              <Last />
              <Category />
              
              {/* <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>
              <Product /> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
