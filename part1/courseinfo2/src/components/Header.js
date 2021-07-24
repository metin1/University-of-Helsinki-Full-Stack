import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  console.log(props)
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

Header.propTypes = {

}

export default Header
