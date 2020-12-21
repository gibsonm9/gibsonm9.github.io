import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledDropdown = styled(Dropdown)`
  float: right;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      display: `flex`,
      flexDirection: `row`,
      justifyContent: `space-between`,
    }}
  >
    <div href="#home"
      style={{
        maxWidth: 960,
        fontFamily: `IM Fell English`,
        margin: `1rem`
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `#593d11`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
    <StyledDropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <FontAwesomeIcon icon={"bars"} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
