import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css'
import clsx from "clsx"
export default function AuthNav() {
  return (
    <div className={css.authCont}>
      <NavLink  className={({ isActive }) => clsx(css.LogIn, { [css.active]: isActive })}  to="/login">
        Login
      </NavLink>
      <NavLink className={({ isActive }) => clsx(css.Register, { [css.active]: isActive })}  to="/register">
        Register
      </NavLink>
      
    </div>
  );
}