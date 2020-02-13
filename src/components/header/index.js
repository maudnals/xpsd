import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		--xpsd
		<nav>
			<Link activeClassName={style.active} href="/">
				XSS
			</Link>
			<Link activeClassName={style.active} href="/profile">
				Oh
			</Link>
			<Link activeClassName={style.active} href="/profile/john">
				No
			</Link>
		</nav>
	</header>
);

export default Header;
