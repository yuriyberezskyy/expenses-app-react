//Higher Order Component
// Reuse code
// Render hijacking
// Abstract state
import React from 'react';

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is private info. Please don't share</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuth ? <WrappedComponent {...props} /> : 'Not Authenticated'}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

export default AuthInfo;
