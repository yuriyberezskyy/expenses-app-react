import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.scss';

const Header = () => {
  return (
    <div>
      <NavLink exact to="/" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  );
};

export default Header;
