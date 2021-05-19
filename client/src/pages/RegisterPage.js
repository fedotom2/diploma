import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook.js';
import { useMessage } from '../hooks/message.hook.js';
import { NavLink } from 'react-router-dom';

export const RegisterPage = () => {
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
    repassword: ''
  });

  useEffect(() => {
    message(error, 'error');
    clearError();
  }, [error, message, clearError]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      message(data.message, 'success');
    } catch (err) {}
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
      <form onChange={changeHandler}>
        <div className="input-group mb-2">
          <input type="text" className="form-control" name="name" placeholder="Name" />
          <input type="text" className="form-control" name="surname" placeholder="Surname" />
        </div>
        <div>
          <input type="text" className="form-control" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="text" className="form-control" name="phone" placeholder="Phone" />
        </div>
        <div>
          <input type="password" className="form-control" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="password" className="form-control" name="repassword" placeholder="Repeat password" />
        </div>
        <div>
          <button className="btn btn-primary" onClick={ registerHandler } disabled={ loading }>Sign up</button>
          <NavLink to="/" className="btn btn-link">Log in</NavLink>
        </div>
      </form>
    </div>
  );
};
