import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import LogoLink from './LogoLink';
import Logo from './logo.svg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar>
        <LogoLink to="/">
          <Img src={Logo} alt="Ripple triskelion logo" />
        </LogoLink>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/solutions">
          <FormattedMessage {...messages.solutions} />
        </HeaderLink>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
      </NavBar>
    );
  }
}

export default Header;
