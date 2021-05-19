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
      <h1>Реєстрація</h1>
      <form onChange={changeHandler}>
        <div className="input-group mb-2">
          <input type="text" className="form-control" name="name" placeholder="Ім'я" />
          <input type="text" className="form-control" name="surname" placeholder="Призвіще" />
        </div>
        <div>
          <input type="text" className="form-control" name="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="text" className="form-control" name="phone" placeholder="Телефон" />
        </div>
        <div>
          <input type="password" className="form-control" name="password" placeholder="Пароль" />
        </div>
        <div>
          <input type="password" className="form-control" name="repassword" placeholder="Повторити пароль" />
        </div>
        <div>
          <button className="btn btn-primary" onClick={ registerHandler } disabled={ loading }>Зареєструвати</button>
          <NavLink to="/" className="btn btn-link">Авторизація</NavLink>
        </div>
      </form>
    </div>
  );
};
