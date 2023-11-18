import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}