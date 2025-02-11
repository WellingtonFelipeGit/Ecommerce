import Header from "../../components/Header";
import { RiHome2Line } from "react-icons/ri";
import {
  ButtonSubmit,
  FormStyled,
  FormTitle,
  LinkRegister,
} from "../../components/Form";
import { InputStyled, LabelStyled } from "../../components/Input";
import { useUserInfoContext } from "../../hooks/useUserInfoContext";

const RegisterPage = () => {
  const {
    username,
    email,
    password,
    getSubmit,
    getUsername,
    getEmail,
    getPassword,
  } = useUserInfoContext();

  return (
    <>
      <Header>
        <LinkRegister to={"/"}>
          <RiHome2Line size={25} />
        </LinkRegister>
        <LinkRegister to={"/login"}>Login</LinkRegister>
      </Header>
      <FormStyled onSubmit={(e) => getSubmit(e, "/register")}>
        <FormTitle>Register</FormTitle>
        <LabelStyled htmlFor="input-name">Username</LabelStyled>
        <InputStyled
          id="input-name"
          type="text"
          value={username}
          onChange={(e) => getUsername(e.target.value)}
        />
        <LabelStyled htmlFor="input-email">Email</LabelStyled>
        <InputStyled
          id="input-email"
          type="email"
          value={email}
          onChange={(e) => getEmail(e.target.value)}
        />
        <LabelStyled htmlFor="input-email">Password</LabelStyled>
        <InputStyled
          id="input-password"
          type="password"
          value={password}
          onChange={(e) => getPassword(e.target.value)}
        />
        <ButtonSubmit>SignUp</ButtonSubmit>
      </FormStyled>
    </>
  );
};
export default RegisterPage;
