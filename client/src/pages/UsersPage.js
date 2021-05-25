import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Navbar } from '../components/Navbar.js';
import { LeftSidebar } from '../components/LeftSidebar.js';
import { Loader } from '../components/Loader.js';
import { UsersTable } from '../components/UsersTable.js';
import { AuthContext } from '../context/AuthContext.js';
import { useHttp } from '../hooks/http.hook.js';

export const UsersPage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [userInfo, setUserInfo] = useState(null);
  const [users, setUsers] = useState(null);

  const getUserInfo = useCallback(async () => {
    try {
      const data = await request('/api/profile/', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      
      setUserInfo(data.user);
    } catch (err) {}
  }, [request, token]);

  const getAllUsers = useCallback(async () => {
    try {
      const data = await request('/api/users/', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
       
      setUsers(data.users);
    } catch (err) {}
  }, [request, token]);

  useEffect(() => {
    getUserInfo();
    getAllUsers();
  }, [getUserInfo, getAllUsers]);

  if (loading) {
    return <Loader />
  }

  return (
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" 
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
      <Navbar name={ userInfo && userInfo.name } />
      <LeftSidebar />
      <div className="page-wrapper" style={{ minHeight: 250 + 'px' }}>
        <div className="page-breadcrumb bg-white">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Користувачі</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                { users && <UsersTable users={ users } /> }
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
