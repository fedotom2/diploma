import React, { useEffect, useCallback, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook.js';
import { AuthContext } from '../context/AuthContext.js';
import { Loader } from '../components/Loader.js';
import { Navbar } from '../components/Navbar.js';
import { LeftSidebar } from '../components/LeftSidebar.js';
import { UserCard } from '../components/UserCard.js';

export const UserPage = () => {
  const userId = useParams().id;
  const auth = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [profileInfo, setProfileInfo] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const getProfile = useCallback(async () => {
    try {
      const data = await request('/api/profile', 'GET', null, {
        Authorization: `Bearer ${ auth.token }`
      });

      setProfileInfo(data.user);
    } catch (err) {}
  }, [request, auth]);

  const getUser = useCallback(async () => {
    try {
      const data = await request(`/api/users/${ userId }`, 'GET', null, {
        Authorization: `Bearer ${ auth.token }`
      });

      setUserInfo(data);
    } catch (err) {}
  }, [request, auth, userId]);

  useEffect(() => {
    getProfile();
    getUser();
  }, [getUser, getProfile]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" 
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
      <Navbar name={ profileInfo && profileInfo.name } />
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
            { userInfo && <UserCard userInfo={ userInfo } userId={ userId } /> }
          </div>
        </div>
      </div>
      <footer className="footer text-center"> 2021 © Claris Verbis
      </footer>
    </div>
  );
};