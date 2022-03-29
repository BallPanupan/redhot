import React, { PureComponent } from 'react'
import NavbarMenu from './NavbarMenu'
import Footer from './footer'

class Layout extends PureComponent {
  render () {
    return (
      <div className='layout'>
        <NavbarMenu/>
        { this.props.children }
        <Footer/>
      </div>
    )
  }
}

export default Layout