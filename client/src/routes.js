import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage.js';
import { RegisterPage } from './pages/RegisterPage.js';
import { ProfilePage } from './pages/ProfilePage.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { SchedulePage } from './pages/SchedulePage.js';
import { PointsPage } from './pages/PointsPage.js';
import { UsersPage } from './pages/UsersPage.js';
import { UserPage } from './pages/UserPage.js';

export const useRoutes = (isAuthenticated, role) => {
  if (isAuthenticated) {
    if (role === 'user') {
      return (
        <Switch>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Redirect to="/profile" />
        </Switch>
      )
    }

    if (role === 'admin') {
      return (
        <Switch>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route path="/profile" exact>
            <ProfilePage />
          </Route>
          <Route path="/users" exact>
            <UsersPage />
          </Route>
          <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/schedule" exact>
            <SchedulePage />
          </Route>
          <Route path="/points" exact>
            <PointsPage />
          </Route>
          <Redirect to="/profile" />
        </Switch>
      )
    }
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
