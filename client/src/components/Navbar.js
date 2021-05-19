import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = (props) => {
  return (
    <header className="topbar" data-navbarbg="skin5">
      <nav className="navbar top-navbar navbar-expand-md navbar-dark">
        <div className="navbar-header" data-logobg="skin6">
          <NavLink className="navbar-brand" to="/dashboard">
            <img src="plugins/images/logo-text.svg" width="150" alt="homepage" />
          </NavLink>
          <a className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
            href="javascript:void(0)" rel="noopener noreferrer"><i className="ti-menu ti-close"></i></a>
        </div>
        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
          <ul className="navbar-nav d-none d-md-block d-lg-none">
            <li className="nav-item">
              <a className="nav-toggler nav-link waves-effect waves-light text-white"
                href="javascript:void(0)" rel="noopener noreferrer"><i className="ti-menu ti-close"></i></a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className=" in">
              <form role="search" className="app-search d-none d-md-block me-3">
                <input type="text" placeholder="Пошук..." className="form-control mt-0" />
                <a href="" className="active" rel="noopener noreferrer">
                  <i className="fa fa-search"></i>
                </a>
              </form>
            </li>
            <li>
              <NavLink className="profile-pic" to="/profile">
                <img src="images/no-avatar.png" alt="user-img" width="36"
                  className="img-circle" /><span className="text-white font-medium">{ props.name }</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};