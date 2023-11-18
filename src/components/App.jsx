import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export default function App() {
  return (
    <Routes>
      <Route path='/' element ={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path='/register'
          element={
            <RestrictedRoute component={<Register />} redirectTo='/contacts' />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute component={<Login />} redirectTo='/contacts' />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute component={<Contacts />} redirectTo='/login' />
          }
        />
      </Route>
    </Routes>
  )
}
