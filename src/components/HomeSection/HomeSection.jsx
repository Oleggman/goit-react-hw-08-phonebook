import { useAuth } from 'hooks';
import homeImage from '../../images/home-image.png'
import {
  HomeContaier, HomeImage, HomeTitle, HomeSectionDesc, HomeLink
} from './HomeSection.styled';
import { Link } from 'react-router-dom';

export const HomeSection = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomeContaier>
      <HomeImage src={homeImage} alt="Welcome" />
      <HomeTitle>Welcome to Phonebook!</HomeTitle>
      <HomeSectionDesc>Welcome to a Phonebook project! Register now and get started using this app.
        The app give an access to add and store all your contacts, you can login and logout.
      </HomeSectionDesc>

      {
        isLoggedIn
          ? <HomeLink to='/contacts'>Go to contacts</HomeLink>
          : <HomeLink to='/register'>Get started</HomeLink>
      }
    </HomeContaier>
  );
}