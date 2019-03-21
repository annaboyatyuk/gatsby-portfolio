import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ menuLinks }) => (
  <header
    style={{
      background: `rgb(44, 44, 44)`,
      marginBottom: `1.45rem`,
    }}
  >
    
    <nav style={{
      // display: 'flex', 
      // flex: 1
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
      display: `grid`,
      gridTemplateColumns: `repeat(6, 1fr)`,
      gridGap: `1vw`,
      color: `white`,
      textDecoration: `none`,
    }}>
    {
      menuLinks.map(link => 
        <li key={link.name} 
          style={{listStyleType: 'none'}}>
          <Link 
            to={link.link}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
            >{link.name}</Link>
        </li>)
    }
  </nav>
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header