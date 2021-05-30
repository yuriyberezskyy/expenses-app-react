import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function ExpensesItem({ id, description, amount, createdAt }) {
  return (
    <div>
      <ul>
        <li>{description}</li>
        <li>{amount}$</li>
        <li>{createdAt}</li>
      </ul>
      <NavLink to={`/edit/${id}`}>Edit</NavLink>
    </div>
  );
}

export default connect()(ExpensesItem);
