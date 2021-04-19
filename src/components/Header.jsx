import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutRequest } from '../actions';

import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

  const { user } = props;
  const hashUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logOutRequest({});
  };
  return (
    <header className='header'>

      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hashUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :

            <img src={userIcon} alt='' />}
          <p>Perfil</p>
        </div>
        <ul>
          {
            hashUser ? (
              <li>
                <Link to='/'>
                  {user.name}
                </Link>
              </li>
            ) : null

          }

          {
            hashUser ? (
              <li>
                <a href='#logout' onClick={handleLogOut}>
                  Cerrar Sesión
                </a>
              </li>
            ) :
              (
                <li>
                  <Link to='/login'>
                    Iniciar Sesión
                  </Link>
                </li>
              )

          }

        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logOutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
