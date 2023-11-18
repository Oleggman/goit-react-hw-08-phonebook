import { useAuth } from "hooks";
import { StyledNavLink, StyledNav } from "./Navigation.styled";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      { isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink> }
    </StyledNav>
  );
}