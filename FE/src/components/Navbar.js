import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
              <Link to='/' className="navbar-brand">
                <i className="fas fa-home"/>
              </Link>  
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                    <Link to='/admin' className="nav-link">
                        Admin
                    </Link>
                  </li>
              </ul>
              <Link to='/cart' className="ms-auto nav-link">
                  <ButtonContainer>
                      <span className="px-2">
                        <i className="fas fa-cart-plus" />
                      </span>
                      Košík
                  </ButtonContainer>
              </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--lightDark);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size:1.1rem;
    }
`;

