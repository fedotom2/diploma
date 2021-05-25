import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { useHttp } from '../hooks/http.hook.js';
import { useMessage } from '../hooks/message.hook.js';

export const UserCard = (props) => {
  const history = useHistory();
  const message = useMessage();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [form, setForm] = useState({
    name: props.userInfo.name,
    surname: props.userInfo.surname,
    patronymic: props.userInfo.patronymic,
    email: props.userInfo.email,
    phone: props.userInfo.phone,
    password: ''
  });

  const updateProfileHandler = async (e) => {
    try {
      e.preventDefault();
      const data = await request('/api/users/update/' + props.userId, 'POST', { ...form }, {
        Authorization: `Bearer ${auth.token}`
      });

      message(data.message, 'success');
    } catch (err) {
      message(err.message, 'error');
    }
  };

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="col-lg-4 col-xlg-3 col-md-12">
      <div className="white-box">
        <div className="user-bg"> 
          <div className="overlay-box">
            <div className="user-content">
              <img src="/images/no-avatar.png"
                  className="thumb-lg img-circle" alt="img" />
              <h4 className="text-white mt-2">{ props.userInfo.name } { props.userInfo.surname }</h4>
              <h5 className="text-white mt-2">{ props.userInfo.email }</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-8 col-xlg-9 col-md-12">
      <div className="card">
        <div className="card-body">
          <form className="form-horizontal form-material" onChange={ changeHandler }>
            <div className="form-group mb-4">
              <label className="col-md-12 p-0">Ім'я</label>
              <div className="col-md-12 border-bottom p-0">
                <input type="text" placeholder="Johnathan Doe"
                  className="form-control p-0 border-0" name="name" defaultValue={ props.userInfo.name } /> </div>
            </div>
            <div className="form-group mb-4">
              <label className="col-md-12 p-0">Призвіще</label>
              <div className="col-md-12 border-bottom p-0">
                <input type="text" placeholder="Johnathan Doe"
                  className="form-control p-0 border-0" name="surname" defaultValue={ props.userInfo.surname } /> </div>
            </div>
            <div className="form-group mb-4">
              <label className="col-md-12 p-0">По батькові</label>
              <div className="col-md-12 border-bottom p-0">
                <input type="text" placeholder="Johnathan Doe"
                  className="form-control p-0 border-0" name="patronymic" defaultValue={ props.userInfo.patronymic } /> </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="example-email" className="col-md-12 p-0">E-mail</label>
              <div className="col-md-12 border-bottom p-0">
                <input type="email" placeholder="johnathan@admin.com"
                  className="form-control p-0 border-0" name="email"
                  id="example-email" defaultValue={ props.userInfo.email } />
              </div>
            </div>
            <div className="form-group mb-4">
              <label className="col-md-12 p-0">Телефон</label>
              <div className="col-md-12 border-bottom p-0">
                <input type="text" placeholder="123 456 7890"
                  className="form-control p-0 border-0" name="phone" defaultValue={ props.userInfo.phone } />
              </div>
            </div>
            <div className="form-group mb-4">
              <label className="col-md-12 p-0">Пароль</label>
              <div className="col-md-12 border-bottom p-0">
                <input type="password" defaultValue="" name="password" className="form-control p-0 border-0" />
              </div>
            </div>
            <div className="form-group mb-4">
              <div className="col-sm-12">
                <button className="btn btn-success" onClick={ updateProfileHandler }>Оновити профіль</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

