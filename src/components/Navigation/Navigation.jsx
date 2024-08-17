import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) =>
						clsx(css.NavLink, isActive && css.linkActive)

const Navigation = () => {
  return (
		<div>
			<nav className={css.nav}>
				<NavLink
					to='/'
					className={buildLinkClass}
				>
					Home
				</NavLink>
				<NavLink
					to='/Movies'
					className={buildLinkClass}
				>
					Movies
				</NavLink>
			</nav>
		</div>
	);
}

export default Navigation
