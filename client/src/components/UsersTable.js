import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useMessage } from '../hooks/message.hook.js';
import { useHttp } from '../hooks/http.hook.js';
import { AuthContext } from '../context/AuthContext.js';

export const UsersTable = (props) => {
  const message = useMessage();
  const { request } = useHttp();
  const { token } = useContext(AuthContext); 

  const roleChangeHandler = async (e) => {
    try {
      const val = e.target.value;
      const dataId = e.target.dataset.id;
      const answer = await request('/api/users/role/update/' + dataId, 'POST', { role: val }, {
        Authorization: `Bearer ${ token }`
      });

      message(answer.message, 'success');
    } catch (err) {
      message(err.message, 'error');
    }
  };

  return (
    <table className="table text-nowrap">
      <thead>
        <tr>
          <th>ID</th>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Роль</th>
        </tr>
      </thead>
      <tbody>
        { props.users.map(user => {
          return (
            <tr key={ user._id }>
              <td>
                <NavLink to={ '/users/' + user._id }>{ user._id }</NavLink>
              </td>
              <td>{ user.name }</td>
              <td>{ user.surname }</td>
              <td>
                <select onChange={ roleChangeHandler } data-id={ user._id } className="form-select" value={ user.role }>
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="user">User</option>
                </select>
              </td>
            </tr>
          )
        }) }
      </tbody>
    </table>
  );
}