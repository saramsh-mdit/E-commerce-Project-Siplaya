import React, { useState } from "react";
import Button from "./../global/Button/index";
import Title from "./../global/Title/index";
import { loginSeller, loginUser } from "../../api/auth";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [userType, setSetUserType] = useState("user");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e, property) => {
    const data = e.target.value;
    const newUserData = { ...userData };
    newUserData[property] = data;
    setUserData(newUserData);
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response =
        userType === "user"
          ? await loginUser(userData)
          : await loginSeller(userData);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      className="login"
      onSubmit={onSubmitHandler}
    >
      <Title>Login Form</Title>
      <div className="formItem">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="name"
          onChange={(e) => changeHandler(e, "email")}
        />
      </div>
      <div className="formItem">
        <label htmlFor="password">Password</label>
        <div>
          <input
            type={show ? "text" : "password"}
            id="password"
            onChange={(e) => changeHandler(e, "password")}
          />
          <Button
            type="button"
            onClick={() => setShow(!show)}
          >
            {show ? "hide" : "show"}
          </Button>
        </div>
      </div>
      <div className="formItem">
        <label htmlFor="userType">Role</label>
        <select
          name="userType"
          id=""
          onChange={(e) => setSetUserType(e.target.value)}
        >
          <option value="user">User</option>

          <option value="seller">Seller</option>
        </select>
      </div>
      <Button
        className="submitBtn"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
