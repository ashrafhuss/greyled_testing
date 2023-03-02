import Header from "./header";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import validationSchema from "../ValidationScheema/Yup";
import { signupUser } from "../Store/api/auth";
import { useFormik } from "formik";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "../services/storage";
const initialValues = {
  firstName: "",
  lastName: "",
  // phonenumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function ProfessorSignup() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (values, action) => {
        console.log("onsubmit-------------- ", values);
        setLoading(true);

        dispatch(
          signupUser({
            body: {
              firstName: values.firstName,
              lastName: values.lastName,
              // phonenumber: "",
              email: values.email,
              password: values.password,
              role: "PROFESSOR",
            },
            onSuccess: (res) => {
              navigate("/createClass", { replace: true });
              setLoading(false);
              toast.success("Welcome!!");
              action.resetForm();
            },

            onError: (err) => {
              setLoading(false);
              toast.error(err.response.data.message);

              console.log(err);
            },
          })
        );

        console.log();
      },
    });

  return (
    <div className="">
      <Header />

      {/* <!-- header --> */}

      <section className="class_room_wrap">
        <div className="custom_container">
          <div className="row">
            <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-12 px-0 left_side_bar  pb-0">
              <SideBar />
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-12">
              <div className="welcome_wrap ">
                <h1 className="main_title mb-4 pt-100 ">welcome, professor</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          name="firstName"
                          value={values.firstName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />{" "}
                        {errors.firstName && touched.firstName ? (
                          <p className="error-msg">{errors.firstName}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          name="lastName"
                          value={values.lastName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />{" "}
                        {errors.lastName && touched.lastName ? (
                          <p className="error-msg">{errors.lastName}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="University email address"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />{" "}
                        {errors.email && touched.email ? (
                          <p className="error-msg">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="Password"
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          value={values.password}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />{" "}
                        {errors.password && touched.password ? (
                          <p className="error-msg">{errors.password}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <input
                          type="Password"
                          className="form-control"
                          placeholder="Confirm password"
                          name="confirmPassword"
                          value={values.confirmPassword}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />{" "}
                        {errors.confirmPassword && touched.confirmPassword ? (
                          <p className="error-msg">{errors.confirmPassword}</p>
                        ) : null}
                      </div>
                    </div>
                    {loading ? (
                      <div>
                        <div className="spinner"></div>
                      </div>
                    ) : (
                      <div className="col-lg-12">
                        <div className="btn_Wrap mt-30">
                          <button
                            type="submit"
                            className="btn_black_theme w-100 d-block"
                          >
                            Sign up
                          </button>
                          <ToastContainer />
                          <p className="btn_link mt-20 pb-55">
                            By signing up, you agree to be contacted by greyled
                            and its partners.{" "}
                            <a
                              href="https://greyled.com/privacy-policy"
                              className="font-whi"
                            >
                              <u>Learn more</u>
                            </a>
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="col-12">
                      <div className="footer_bottom">
                        <p className="btn_link text_drak">
                          Already have an account?{" "}
                          <a href="/professorSignin" className=" ">
                            <u>Sign in</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProfessorSignup;
