import 'normalize.css/normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Classes,
  Alignment,
  H4
} from '@blueprintjs/core'

function Index() {
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

      <main
        style={{
          backgroundColor: '#30404d',
          height: '100vh',
          paddingTop: '70px'
        }}
      >
        <H4>The site is under construction</H4>
      </main>
    </div>
  )
}

export default Index
