import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DARK_BROWN, LIGHTER_DARK_BROWN } from "./colors"

const StyledDropdown = styled(Dropdown)`
  position: absolute;
  right: 1em;
  top: .5em;
  font-family: 'Raleway';
`;

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <StyledToggleDiv>
    <StyledToggleLink
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    ><FontAwesomeIcon icon={"bars"} />
    </StyledToggleLink>
  </StyledToggleDiv>
));

const StyledToggleDiv = styled.div`
  margin: 1.5rem;
  font-size: 20px;
`;

const StyledToggleLink = styled.a`
  color: ${LIGHTER_DARK_BROWN};

  &:hover {
    color: ${DARK_BROWN};
  }
`;


const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
      position: `fixed`,
      width: `100%`,
      backgroundColor: `#fff`,
      zIndex: 3,
    }}
  >
    <div href="#home"
      style={{
        fontFamily: `Raleway`,
        margin: `1.5rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: DARK_BROWN,
          }}
        >
          {/*siteTitle*/}
        </Link>
      </h3>
    </div>
    <StyledDropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#about">About</Dropdown.Item>
        <Dropdown.Item href="#cv">CV</Dropdown.Item>
        <Dropdown.Item href="#research">Research</Dropdown.Item>
        <Dropdown.Item href="#teaching">Teaching</Dropdown.Item>
        <Dropdown.Item href="#pict">PICT</Dropdown.Item>
        <Dropdown.Item href="#contact">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </StyledDropdown>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
