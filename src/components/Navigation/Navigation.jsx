import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx"
import css from './Navigation.module.css'
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <nav>
      <NavLink  to="/" className={({ isActive }) => clsx(css.home, { [css.active]: isActive })} >
        Home
      </NavLink>
      {isLoggedIn && <NavLink  to="/contacts" className={({ isActive }) => clsx(css.contacts, { [css.active]: isActive })} >
          Contacts
        </NavLink>}
        
    </nav>
  );
}