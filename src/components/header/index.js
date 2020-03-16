import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style.css'

const routes = {
  xss: {
    label: 'XSS',
    href: '/'
  },
  profile: {
    label: 'profile',
    href: '/profile'
  },
  john: {
    label: 'profile/john',
    href: '/profile/john'
  }
}

const Header = () => (
  <header class={style.header}>
    <nav>
      {Object.keys(routes).map(r =>
        (<Link activeClassName={style.active} href={routes[r].href}>
          {routes[r].label}
        </Link>)
      )}
    </nav>
  </header>
)

export default Header
