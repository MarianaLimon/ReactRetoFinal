import React, { useState, useEffect } from "react";

import { useHistory } from "react-router";

import CustomInput from "../../components/CustomInput";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Services
import { postLogin } from "../../services";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token_dev")) {
      history.push("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        email,
        password,
      };

      const login = await postLogin(newUser);
      if (login.success) {
        localStorage.setItem("token_dev", login.data.token);

        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
            <div className="col p-5">
              <h2 className="text-white">Log In</h2>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="form-group col-12">
                  <CustomInput
                    id="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    callback={setEmail}
                  />
                </div>
                <div className="form-group col-12">
                  <CustomInput
                    id="Password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    callback={setPassword}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
