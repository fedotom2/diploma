import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook.js';
import { useMessage } from '../hooks/message.hook.js';
import { AuthContext } from '../context/AuthContext.js'; 
import { NavLink } from 'react-router-dom';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    message(error, 'error');
    clearError();
  }, [error, message, clearError]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form});
      auth.login(data.token, data.userId);
    } catch (err) {}
  };

  return (
    <div className="login-form">
      <h1>Log in</h1>
      <form onChange={changeHandler}>
        <div>
          <input type="text" className="form-control" name="email" placeholder="email" />
        </div>
        <div>
          <input type="password" className="form-control" name="password" placeholder="password" />
        </div>
        <div>
          <button className="btn btn-primary" onClick={ loginHandler } disabled={ loading }>Log in</button>
          <NavLink to="/register" className="btn btn-link">Sign up</NavLink>
        </div>
      </form>
    </div>
  );
};
