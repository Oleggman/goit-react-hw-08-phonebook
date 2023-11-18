import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import { StyledMenu, WelcomeMessage, LogoutButton } from "./UserMenu.styled";
import { IoIosLogOut } from "react-icons/io";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledMenu>
      <WelcomeMessage>Welcome, {user.name}!</WelcomeMessage>
      <LogoutButton onClick={() => dispatch(logout())}><IoIosLogOut /></LogoutButton>
    </StyledMenu>
  );
}