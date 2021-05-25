import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';

export const LeftSidebar = () => {
  const { role } = useContext(AuthContext);

  const renderMenu = () => {
    if (role === 'user') {
      return (
        <li className="sidebar-item">
          <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/profile"
            aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="hide-menu">Профіль</span>
          </NavLink>
        </li>
      );
    }

    if (role === 'admin') {
      return (
        <>
        <li className="sidebar-item pt-2">
          <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/dashboard"
            aria-expanded="false">
            <i className="far fa-clock" aria-hidden="true"></i>
            <span className="hide-menu">Панель керування</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/profile"
            aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="hide-menu">Профіль</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/users"
            aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="hide-menu">Користувачі</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/schedule"
            aria-expanded="false">
            <i className="fa fa-table" aria-hidden="true"></i>
            <span className="hide-menu">Розклад</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link waves-effect waves-dark sidebar-link" to="/points"
            aria-expanded="false">
            <i className="fas fa-book" aria-hidden="true"></i>
            <span className="hide-menu">Оцінки</span>
          </NavLink>
        </li>
        </>
      );
    }
  };

  return (
    <aside className="left-sidebar" data-sidebarbg="skin6">
      <div className="scroll-sidebar">
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            { renderMenu() }
          </ul>
        </nav>
      </div>
    </aside>
  );
};
