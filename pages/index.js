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
  Alignment
} from '@blueprintjs/core'

function Index() {
  return (
    <div className='bp3-dark'>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>thinhphan.dev</NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon='home' text='Home' />
          <Button className={Classes.MINIMAL} icon='document' text='Files' />
        </NavbarGroup>
      </Navbar>

      <main>
        <section>The site is under construction</section>
      </main>
    </div>
  )
}

export default Index
