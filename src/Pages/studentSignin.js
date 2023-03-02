import Header from "./header";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signinUser } from "../Store/api/auth";
import { Formik, useFormik, ErrorMessage } from "formik";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import loginSchema from "../ValidationScheema/LoginScheema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "../services/storage";
import * as Yup from "yup";

const loginFormInitialValues = {
  email: "",
  password: "",
};

let verifyLink, resetLink, profileSettings;
//login from submit handler.

function StudentSignin(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
useEffect(() => {
  const token = storage.get('xAuthToken');
  if(token){
    navigate('/', {replace: true})
  }
}, [])

  //loader
  const [loading, setLoading] = useState(false);
  //Alert Message
  const [errorMessage, setErrorMessage] = useState({
    type: "success",
    message: "",
  });

  //form values
  const [formType, setFormType] = useState("login");

  const onSubmit = async (values, action) => {
    console.log("vlue..........", values);
    setLoading(true);
    dispatch(
      signinUser({
        body: values,
        onSuccess: (res) => {
          const { emailVerified } = res.data.data;

          setLoading(false);
          //toast.success("Welcome!!");
          action.resetForm();
          navigate("/", { replace: true });
          if (!emailVerified) {
            if (verifyLink) verifyLink.click();
          }
          setErrorMessage({ type: "danger", message: "" });
          // props.history.replace("/");
          // navigate("/studentSignin", { replace: true });
        },
        onError: (err) => {
          if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage({
              type: "danger",
              message: err.response.data.message,
            });
            toast.error(err.response.data.message);
          }
        },
        onEnd: () => {
          setLoading(false);
        },
      })
    );
  };

  return (
    <div className="">
      <Header />

      {/* <!-- header --> */}
      <Formik
        initialValues={loginFormInitialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <section className="class_room_wrap">
            <div className="custom_container">
              <div className="row">
                <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-12 px-0 left_side_bar  pb-0">
                  <SideBar />
                </div>
                <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-12">
                  <div className="welcome_wrap ">
                    <h1 className="main_title mb-4 pt-100 ">welcome back</h1>

                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email address"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                          />{" "}
                          <p className="error-msg">
                            <ErrorMessage className="error-msg" name="email" />
                          </p>
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
                          <p className="error-msg">
                            <ErrorMessage
                              className="error-msg"
                              name="password"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="btn_Wrap mt-30">
                          {loading ? (
                            <div>
                              <div className="spinner"></div>
                            </div>
                          ) : (
                            <button
                              type="submit"
                              className="btn_black_theme w-100 d-block"
                              onClick={handleSubmit}
                            >
                              Sign In
                            </button>
                          )}

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
                      <div className="col-12">
                        <div className="footer_bottom">
                          <p className="btn_link text_drak">
                            Don't have an account?{" "}
                            <a href="/studentSignup" className=" ">
                              <u>Sign up</u>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Formik>
    </div>
  );
}
export default StudentSignin;
