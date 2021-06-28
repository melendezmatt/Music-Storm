import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">
          <button className="btn">
            Log In
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="btn">
            Sign Up
          </button>
        </NavLink>
        <NavLink to="/demo">
          <button className="btn">
            Demo User
          </button>
        </NavLink>
      </>
    );
  }

  return (
    <div className='nav-bar'>
      <div>
        <NavLink exact to="/">
          <button className="btn">
            Home
          </button>
        </NavLink>
      </div>
      <div>
      <NavLink exact to={`/users/${sessionUser?.id}/upload`}>
          <button className="btn btn-upload">
            Upload
          </button>
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/users">
          <button className="btn">
            Featured Artists
          </button>
        </NavLink>
      </div>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
