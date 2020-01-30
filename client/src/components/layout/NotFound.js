import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Not Found
      </h1>
      <p className='large notfound'></p>

      <h2 className='text-center'>
        Try Somthing Else or Check out Ours
        <Link to='/profiles'> Developers</Link>
      </h2>
    </Fragment>
  );
};

export default NotFound;
