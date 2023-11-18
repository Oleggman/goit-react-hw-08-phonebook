import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledAuthNav = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledAuthNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 16px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 20px;

  border-radius: 3px;
  text-decoration: none;
  border: solid 1px $white;
  background: none;
  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    color: #5990FF;
    background: #fff;
  }
`;

export const AuthIcon = styled.span`
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;