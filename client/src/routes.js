import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage.js';
import { RegisterPage } from './pages/RegisterPage.js';
import { ProfilePage } from './pages/ProfilePage.js';
import { DashboardPage } from './pages/DashboardPage.js';
import { SchedulePage } from './pages/SchedulePage.js';
import { PointsPage } from './pages/PointsPage.js';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/dashboard" exact>
          <DashboardPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
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
