import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from '../utils/isAuthenticated';

const PublicRoute = ({component: Component, onlyPublic = false, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        onlyPublic ? (
          <Component {...props} />
        ) : !isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PublicRoute;
