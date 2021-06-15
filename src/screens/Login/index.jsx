import React, { useState } from "react";

import { useHistory } from "react-router";

import CustomInput from "../../components/CustomInput";

// Services
import { postUser } from "../../services";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        email,
        password,
      };
      await postUser(newUser);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
}
