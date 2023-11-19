import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
      <b>Refreshing user...</b>
    ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path='/register'
          element={
            <RestrictedRoute component={<RegisterPage />} redirectTo='/contacts' />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo='/login' />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  )
}
