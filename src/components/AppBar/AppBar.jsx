import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks";
import { AppTitle, Header } from "./AppBar.styled";
import { RiContactsBook2Fill } from "react-icons/ri";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <AppTitle><RiContactsBook2Fill />Phonebook</AppTitle>
      <Navigation />

      { isLoggedIn ? <UserMenu /> : <AuthNav /> }
    </Header>
  );
}