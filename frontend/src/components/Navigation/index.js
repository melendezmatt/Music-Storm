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
          <button>
            Log In
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button>
            Sign Up
          </button>
        </NavLink>
      </>
    );
  }

  return (
    <ul className='nav-bar'>
      <li>
        <NavLink exact to="/">
          <button>
            Home
          </button>
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
      <li>
        <NavLink exact to="/users">
          <button>
            Featured Artists
          </button>
        </NavLink>
        <NavLink exact to={`/users/${sessionUser?.id}/upload`}>
          <button>
            Upload
          </button>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
