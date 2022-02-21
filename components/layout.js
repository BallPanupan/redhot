import React, { PureComponent } from 'react'
import NavbarMenu from './NavbarMenu'

class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <NavbarMenu/>
        { this.props.children }
      </div>
    )
  }
}

export default Layout