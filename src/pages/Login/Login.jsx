import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../store/userSlice";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const [confirmToken, setConfirmToken] = useState();

  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // const confirmLocalToken = localStorage.getItem("token");

  // console.log("token ==========", token);
  // console.log("confirmToken ==========", confirmToken);
  // console.log("confirmLocalToken ==========", confirmLocalToken);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm();

  useEffect(() => {
    if (token) window.location = "/user/dashboard";
    // if (token) navigate("/user/dashboard", { replace: true });
  }, [token]);

  const onSubmit = async (data) => {
    console.log("data = ", data);
    // setConfirmToken(data);
    dispatch(getUserDetail(data));
  };

  return (
    <>
      <section className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 mx-auto">
              <h1 className="mb-5">Login </h1>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-2">
                  <label className="form-label d-block">Username</label>
                  <input
                    className="px-3 py-1 w-100"
                    type="text"
                    {...register("username")}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label d-block">Password</label>
                  <input
                    className="px-3 py-1 w-100"
                    type="password"
                    {...register("password")}
                  />
                </div>
                <Button className="px-4" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
