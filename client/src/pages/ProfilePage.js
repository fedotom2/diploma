import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Navbar } from '../components/Navbar.js';
import { LeftSidebar } from '../components/LeftSidebar.js';
import { Loader } from '../components/Loader.js';
import { ProfileCard } from '../components/ProfileCard.js';
import { AuthContext } from '../context/AuthContext.js';
import { useHttp } from '../hooks/http.hook.js';

export const ProfilePage = () => {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [userInfo, setUserInfo] = useState(null);

  const getUserInfo = useCallback(async () => {
    try {
      const data = await request('/api/profile/', 'GET', null, {
        Authorization: `Bearer ${token}`
      });
      
      setUserInfo(data.user);
    } catch (err) {}
  }, [request, token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

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
              <h4 className="page-title">Профіль</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            { userInfo && <ProfileCard userInfo={ userInfo } /> }
          </div>
        </div>
      </div>
      <footer className="footer text-center"> 2021 © Claris Verbis
      </footer>
    </div>
  )
};
