import {
  Error, FormTitle, InputBox, InputLabel, StyledField, StyledForm, SubmitBtn
} from "components/ContactsForm/ContactsForm.styled";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
      .trim()
      .min(5, 'Too short email!')
      .max(50, 'Too long email!')
      .required('Required'),
  password: Yup.string()
      .trim()
      .min(8, 'Too short password!')
      .max(50, 'Too long password!')
      .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmitForm = e => {
    e.preventDefault();

    const form = e.target;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={onSubmitForm}
    >
      <StyledForm>
        <FormTitle>Log in</FormTitle>
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
        <SubmitBtn type="submit">Log in</SubmitBtn>
      </StyledForm>
    </Formik>
  );
}