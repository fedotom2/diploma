import React from 'react';
import { Navbar } from '../components/Navbar.js';
import { LeftSidebar } from '../components/LeftSidebar.js';

export const PointsPage = () => {
  return (
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" 
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
      <Navbar />
      <LeftSidebar />
      <div className="page-wrapper" style={{ minHeight: 250 + 'px' }}>
        <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Оцінки</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">Оцінки</h3>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center"> 2021 © Claris Verbis
        </footer>
      </div>
    </div>
  )
};
