import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import 'bulma/css/bulma.min.css'

import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Classes,
  Alignment
} from '@blueprintjs/core'

function Layout({ children }) {
  return (
    <div className='bp3-dark'>
      <Navbar fixedToTop>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>thinhphan.dev</NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon='home' text='Home' />
          <Button className={Classes.MINIMAL} icon='document' text='Files' />
        </NavbarGroup>
      </Navbar>

      <div
        className='section'
        style={{
          backgroundColor: '#30404d',
          paddingTop: '70px',
          height: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Layout
