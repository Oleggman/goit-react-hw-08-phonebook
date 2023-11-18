import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'
import { MainContainer, AppTitle, ContactsList, ContactsTitle } from './App.styled';
import { fetchContacts } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export default function App() {
  return (
    <Routes>
      <Route path='/' element ={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
  )
}
