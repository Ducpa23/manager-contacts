import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="account-pages mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-pattern">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <div className="auth-logo">
                      <a
                        href="index.html"
                        className="logo logo-dark text-center"
                      >
                        <span className="logo-lg">
                          <img
                            src="../assets/images/logo-dark.png"
                            alt=""
                            height={22}
                          />
                        </span>
                      </a>
                      <a
                        href="index.html"
                        className="logo logo-light text-center"
                      >
                        <span className="logo-lg">
                          <img
                            src="../assets/images/logo-light.png"
                            alt=""
                            height={22}
                          />
                        </span>
                      </a>
                    </div>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                  </div>
                  <form action="#">
                    <div className="form-group mb-3">
                      <label htmlFor="emailaddress">Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="password">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <div
                          className="input-group-append"
                          data-password="false"
                        >
                          <div className="input-group-text">
                            <span className="password-eye" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkbox-signin"
                          defaultChecked
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkbox-signin"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-0 text-center">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        {" "}
                        Log In{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* end card */}
              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p>
                    {" "}
                    <a
                      href="auth-recoverpw.html"
                      className="text-white-50 ml-1"
                    >
                      Forgot your password?
                    </a>
                  </p>
                  <p className="text-white-50">
                    Don't have an account?{" "}
                    <a href="auth-register.html" className="text-white ml-1">
                      <b>Sign Up</b>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer footer-alt">
        2015 - © UBold theme by{" "}
        <a href className="text-white-50">
          Coderthemes
        </a>
      </footer>
    </div>
  );
};

export default LoginPage;
