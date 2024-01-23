import React, { useState } from "react";
import "./Register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";

const Register = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    window.localStorage.setItem("userData", JSON.stringify(data));
    navigate("/category");
  };
  return (
    <>
      <div className="main">
        <Banner />
        <div className="register">
          <div className="form_header">
            <h1>Super app</h1>
            <h4>Create your new account</h4>
            {/* <p>Email | Google</p> */}
          </div>
          <div className="form_section">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="input_div">
                <input
                  type="text"
                  className="form_input"
                  placeholder="Name"
                  {...register("name", {
                    required: true,
                    pattern: /^[A-Za-z ]{4,20}$/i,
                  })}
                />
                <span>
                  {errors.name?.type === "required" && "Name is required"}
                  {errors.name?.type === "pattern" &&
                    "Name should be 4-20 character"}
                </span>
              </div>
              <div className="input_div">
                <input
                  type="text"
                  className="form_input"
                  placeholder="UserName"
                  {...register("username", {
                    required: true,
                    pattern: /^[A-Za-z0-9_-]{6,16}$/i,
                  })}
                />
                <span>
                  {errors.username?.type === "required" &&
                    "username is required"}
                  {errors.username?.type === "pattern" &&
                    "username must have an uppercase letter, a lowercase letter, a number, an underscore, or a hyphen"}
                </span>
              </div>
              <div className="input_div">
                <input
                  type="email"
                  className="form_input"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                <span>
                  {errors.email?.type === "required" && "email is required"}
                  {errors.email?.type === "pattern" &&
                    "email is not in correct formate"}
                </span>
              </div>
              <div className="input_div">
                <input
                  type="number"
                  className="form_input"
                  placeholder="Mobile"
                  {...register("number", {
                    required: true,
                    pattern:
                      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i,
                  })}
                />
                <span>
                  {errors.number?.type === "required" &&
                    "mobilr number is required"}
                  {errors.number?.type === "pattern" &&
                    "mobilr number must have min 10 number"}
                </span>
              </div>
              <div className="input_div checkbox">
                <input
                  {...register("checkbox", { required: true })}
                  type="checkbox"
                  className="form_input"
                />
                <pre>Share my registration data with Superapp</pre>
              </div>
              <span>
                {errors.checkbox?.type === "required" && "accept term"}
              </span>
              <button className="register_btn" type="submit">
                SIGN UP
              </button>
              <p>
                By clicking on Sign up. you agree to Superapp{" "}
                <span>Terms and Conditions of Use</span>
              </p>
              <p>
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp
                <span> Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
