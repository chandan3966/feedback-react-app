import React from 'react'
import PropTypes from 'prop-types'


function Header({text,bgColor, color}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: color
    }
  return (
    <header style={ headerStyles}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback App",
    bgColor: 'rgba(0,0,0,0.4)',
    color:'#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}
export default Header
