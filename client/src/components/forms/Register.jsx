import React, { useState } from "react";
import Button from "../global/Button/index";
import Title from "../global/Title/index";
import { registerSeller, registerUser } from "../../api/auth";

const RegisterForm = () => {
  const [show, setShow] = useState(false);
  const [userType, setSetUserType] = useState("user");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    shop_name: "",
    shop_registration_no: "",
  });

  // React.useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

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
          ? await registerUser(userData)
          : await registerSeller(userData);
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
      <Title>Register Form</Title>
      <div className="formItem">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => changeHandler(e, "name")}
        />
      </div>
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
        <label htmlFor="contact">contact</label>
        <input
          type="text"
          id="contact"
          onChange={(e) => changeHandler(e, "contact")}
        />
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
      {userType === "user" ? null : (
        <>
          <div className="formItem">
            <label htmlFor="shopName">Shop Name</label>
            <input
              type="text"
              id="shopName"
              onChange={(e) => changeHandler(e, "shop_name")}
            />
          </div>
          <div className="formItem">
            <label htmlFor="shop_registration_no">Shop Reg. No</label>
            <input
              type="text"
              id="shop_registration_no"
              onChange={(e) => changeHandler(e, "shop_registration_no")}
            />
          </div>
        </>
      )}
      <Button
        className="submitBtn"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
