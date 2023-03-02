import React from "react";
import { useEffect, useState } from "react";
import Header from "./header";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import validationSchema from "../ValidationScheema/Yup";
import { signupUser } from "../Store/api/auth";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
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

function StudentSignup() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const token = storage.get('xAuthToken');
    if(token){
      navigate('/', {replace: true})
    }
  }, [])

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
              role: "STUDENT",
            },
            onSuccess: (res) => {
              setLoading(false);
              toast.success("Welcome!!");
              // alert("Student Successfully Signed-Up..!");
              action.resetForm();
            },
            onError: (err) => {
              setLoading(false);
              toast.error(err.response.data.message);
            },
            // onEnd: () => {
            //   console.log("final");
            //   setShowLoader(false);
            // },
          })
        );

        console.log();
      },
    });

  // Student Signup
  /* const SignUp = () => {
    dispatch(signUpStudent({ firstName, lastName, email, password }));
  }; */

  return (
    <div>
      <Header />
      <section className="class_room_wrap">
        <div className="custom_container">
          <div className="row">
            <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-12 px-0 left_side_bar  pb-0">
              <SideBar />
            </div>
            <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-12">
              <div className="welcome_wrap ">
                <h1 className="main_title mb-4 pt-100 ">welcome</h1>
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
                        />
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
                          type="text"
                          className="form-control"
                          placeholder="University email address"
                          name="email"
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
                          name="password"
                          placeholder="Password"
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
                          <a href="/studentSignin" className=" ">
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
      {/* <!-- Option 1: Bootstrap Bundle with Popper --> */}
    </div>
  );
}

export default StudentSignup;
