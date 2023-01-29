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

  return (
    <div className="container">
      <div className="text-center row mt-5">
        <div className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
