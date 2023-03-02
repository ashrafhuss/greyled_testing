import Header from "./header";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

function ClassSelect() {
  const navigate = useNavigate();
  const options = ["One", "Two"];
  const coursesPage = (e) => {
    console.log("clicked----------", e.target.value);

    if (e.target.value == "professor") {
      console.log("professor---------");

      navigate("/professorSignup");
    } else if (e.target.value == "student") {
      console.log("student----------");

      navigate("/studentSignup");
    }
  };

  return (
    <div>
      <Header />
      <body>
        <section className="class_room_wrap">
          <div className="custom_container">
            <div className="row  ">
              <div className="col-xxl-3 col-xl-5 col-lg-5 col-md-12 px-0 left_side_bar  pb-0">
                <SideBar />
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-12">
                <div className="welcome_wrap ">
                  <h1 className="small_title  pt-100 ">welcome</h1>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h4 className="user_name">i am a </h4>{" "}
                    </div>
                    <div className="col-md-8">
                      <div className="form_wrap_select">
                        <div className="custom_select">
                          <select
                            className="form-select  form-control"
                            onChange={coursesPage}
                          >
                            <option>Select One</option>
                            <option value="professor">Professor</option>
                            <option value="student">Student</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="footer_bottom">
                      <p className="btn_link text_drak">
                        Already have an account?{" "}
                        <a href="" className=" ">
                          <u>Sign in</u>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 	<!-- Option 1: Bootstrap Bundle with Popper --> */}
        <script
          type="application/javascript"
          src="assets/js/jquery.min.js"
        ></script>
        <script
          type="application/javascript"
          src="assets/js/bootstrap.bundle.min.js"
        ></script>
        <script
          type="application/javascript"
          src="assets/js/custom.js"
        ></script>
      </body>
    </div>
  );
}

export default ClassSelect;
