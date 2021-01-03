import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ResumeDownloadLink from "./resume-download";

export const PaddedNavText = styled.div`
  padding: 0 1.5em;
  text-align: center;
`

export const PaddedNavLink = styled(Nav.Link)`
  margin: auto;
  color: #fff !important;
  &:hover {
    color: #fff !important;
  }
`

export const StyledNavbar = styled(Navbar)`
  color: #fff;
`

const Header = () => (
    <StyledNavbar fixed="top" bg="dark" variant="dark" expand={'sm'}>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <PaddedNavLink href="#about">About</PaddedNavLink>
          <PaddedNavText>
            <Navbar.Text>
              <ResumeDownloadLink id="download" linkText="CV" />
            </Navbar.Text>
          </PaddedNavText>
          <PaddedNavLink href="#research">Research</PaddedNavLink>
          <PaddedNavLink href="#teaching">Teaching</PaddedNavLink>
          <PaddedNavLink href="#pict">PICT</PaddedNavLink>
          <PaddedNavLink href="#contact">Contact</PaddedNavLink> 
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
