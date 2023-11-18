import {
  Error, FormTitle, InputBox, InputLabel, StyledField, StyledForm, SubmitBtn
} from "components/ContactsForm/ContactsForm.styled";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
      .trim()
      .min(3, 'Too short name!')
      .max(30, 'Too long name!')
      .required('Required'),
  email: Yup.string()
      .trim()
      .min(5, 'Too short email!')
      .max(50, 'Too long email!')
      .required('Required'),
  password: Yup.string()
      .trim()
      .min(8, 'Too short password!')
      .min(50, 'Too long password!')
      .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={onSubmitForm}
    >
      <StyledForm>
        <FormTitle>Register</FormTitle>
        <InputBox>
          <StyledField name="name" autoComplete="off" />
          <InputLabel>Name</InputLabel>
          <Error component='p' name="name" />
        </InputBox>
        <InputBox>
          <StyledField type="email" name="email" autoComplete="off" />
          <InputLabel>Email</InputLabel>
          <Error component='p' name="email" />
        </InputBox>
        <InputBox>
          <StyledField type="password" name="password" autoComplete="off" />
          <InputLabel>Password</InputLabel>
          <Error component='p' name="password" />
        </InputBox>
        <SubmitBtn type="submit">Register</SubmitBtn>
      </StyledForm>
    </Formik>
  );
}