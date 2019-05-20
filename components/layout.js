import Link from 'next/link'
import { withRouter } from 'next/router'
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

function Layout({ children, router }) {
  return (
    <div className='bp3-dark'>
      <Navbar fixedToTop>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>thinhphan.dev</NavbarHeading>
          <NavbarDivider />
          <Link href='/'>
            <Button
              className={Classes.MINIMAL}
              active={router.asPath === '/'}
              icon='home'
              text='Home'
            />
          </Link>
          <Link href='/console'>
            <Button
              className={Classes.MINIMAL}
              active={router.asPath === '/console'}
              icon='console'
              text='Console'
            />
          </Link>
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

export default withRouter(Layout)
