import { StyledAuthNavLink, StyledAuthNav, AuthIcon } from "./AuthNav.styled";
import { IoIosLogIn } from "react-icons/io";
import { PiShootingStarThin } from "react-icons/pi";

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledAuthNavLink to="/register">
        <p>Register</p>
        <AuthIcon><PiShootingStarThin /></AuthIcon>
      </StyledAuthNavLink>

      <StyledAuthNavLink to="/login">
        <p>Log In</p>
        <AuthIcon><IoIosLogIn /></AuthIcon>
      </StyledAuthNavLink>
    </StyledAuthNav>
  );
}