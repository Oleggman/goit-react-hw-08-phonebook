import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 12px 16px;
  color: #00EFFF;
  text-decoration: none;
  border: solid 1px #00EFFF;
  background: none;
  
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 3px;
  display: block;
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &:hover {
    color: #23355B;
    background: #00EFFF;
  }
`;