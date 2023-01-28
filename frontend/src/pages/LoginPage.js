import { useDispatch } from "react-redux";
import { authLogin } from "store/auth/auth-slice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    const data = {
      email: "ducpa233@gmail.com",
      password: "123456",
    };
    dispatch(authLogin(data));
  };

  return <div></div>;
};

export default LoginPage;
