import Header from "./header";
import SideBar from "./SideBar";
import DatePicker from "react-datepicker";
import { createClassAuth } from "../Store/api/auth";
import "react-datepicker/dist/react-datepicker.css";
import classSchema from "../ValidationScheema/ClassSchema";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSection, authReducer } from "../Store/auth/authReducer";

const initialValues = {
  courseNumber: "",
  courseName: "",
  startDate: "",
  endDate: "",
};

function CreateClass() {
  //Create new section States
  const [spnNo, setSpnNo] = useState("");
  const [sectionNo, setSectionNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [updated, setUpdated] = useState(message);
  const [message, setMessage] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [classTab, setclassTab] = useState("classinfo");
  const [chooseClass, setChooseClass] = useState("");
  const [showResults, setShowResults] = useState(false);
  const onClick = (value) => setShowResults(value);
  const [loading, setLoading] = useState(false);

  const count = useSelector((state) => state.auth.count);
  const adSection = useSelector((state) => state.auth.adSection);
  const dispatch = useDispatch();

  const [creatSection, setCreatSection] = useState(false);
  const onClicks = (value1) => setCreatSection(value1);

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: classSchema,
      onSubmit: (values, action) => {
        console.log("On Class Submit data-------------- ", values);
        setLoading(true);
        dispatch(
          createClassAuth({
            body: {
              courseNumber: values.courseNumber,
              courseName: values.courseName,
              // phonenumber: "",
              startDate: values.startDate,
              endDate: values.endDate,
            },
            onSuccess: (res) => {
              console.log("success======", res);
              setLoading(false);

              action.resetForm();
              console.log(res);
            },

            onError: (err) => {
              setLoading(false);

              console.log("error");
              console.log(err);
            },
          })
        );

        console.log();
      },
    });
  console.log("formik", classSchema);

  const setClass = (e, value) => {
    setclassTab(value);
  };
  const selectClass = (e, value) => {
    setChooseClass(value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message);
  };
  const handleChang = (event) => {
    if (!message.includes(event.target.value)) {
      setMessage([...message, event.target.value]);
    } else {
      setMessage(message.filter((e) => e !== event.target.value));
    }
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addSection(spnNo));
  };
  console.log("the statu of ", spnNo);

  return (
    <div>
      <Header />
      <section className="class_room_wrap">
        <div className="custom_container">
          <div className="row   ">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12 px-0 left_side_bar  pb-0">
              <SideBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-8">
              <div className="welcome_wrap custom_nav pr-50 pt-16 ">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        classTab === "classinfo"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class-info"
                      type="button"
                      role="tab"
                      aria-controls="class-info"
                      aria-selected="true"
                      onClick={(e) => setClass(e, "classinfo")}
                    >
                      class-info
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        classTab === "classdetails"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="class_details-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#class_details"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      onClick={(e) => setClass(e, "classdetails")}
                    >
                      class details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        classTab === "addstudents"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="add_students-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#add_students"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      onClick={(e) => setClass(e, "addstudents")}
                    >
                      add students
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="ClassInfo">
                  <div
                    className={
                      classTab === "classinfo"
                        ? "tab-pane fade show active"
                        : "tab-pane fade show "
                    }
                    id="class-info"
                    role="tabpanel"
                    aria-labelledby="class-info-tab"
                  >
                    <div className="row class_info_wrap">
                      <div className="col-xl-9 col-lg-12">
                        {" "}
                        <a className="btn_link_step d-flex  justify-content-end ml-auto pt-100 ">
                          Skip for now
                        </a>
                        <h1 className="main_title  ">
                          let’s create your class
                        </h1>
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Course number"
                                  name="courseNumber"
                                  value={values.courseNumber}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />{" "}
                                {errors.courseNumber && touched.courseNumber ? (
                                  <p className="error-msg">
                                    {errors.courseNumber}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Course name"
                                  name="courseName"
                                  value={values.courseName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />{" "}
                                {errors.courseName && touched.courseName ? (
                                  <p className="error-msg">
                                    {errors.courseName}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                {/* {startDate} */}
                                <DatePicker
                                  placeholderText="Start Date"
                                  onChange={(date) => setStartDate(date)}
                                  className="form-control"
                                  name="startDate"
                                  selected={startDate}
                                  //value={value.startDate}
                                />
                                {/* <DatePicker
                                  type="text"
                                  className="form-control"
                                  placeholder="Start date"
                                  onfocus="(this.type='date')"
                                  name="start_date"
                                  id="date"
                                  value={values.start_date}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                /> */}{" "}
                                {errors.startDate && touched.startDate ? (
                                  <p className="error-msg">
                                    {errors.startDate}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <DatePicker
                                  placeholderText="End Date"
                                  onChange={(date) => setEndDate(date)}
                                  className="form-control"
                                  name="endDate"
                                  selected={endDate}
                                  //value={value.startDate}
                                />
                                {/* <input
                                  type="date"
                                  dateFormat="dd/MM/yyyy"
                                  className="form-control"
                                  placeholder="End date"
                                  min={new Date().toISOString().split("T")[0]}
                                  onfocus="(this.type='date')"
                                  name="end_date"
                                  value={values.end_date}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />{" "} */}
                                {errors.endDate && touched.endDate ? (
                                  <p className="error-msg">{errors.endDate}</p>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group Schedule_wrap">
                                <div className="select_option_wrap">
                                  <button
                                    type="button"
                                    className="select_option Schedule_btn "
                                    onClick={() => onClick(true)}
                                  >
                                    Schedule
                                  </button>
                                  <div className="icon">
                                    {" "}
                                    <img
                                      src="assets/images/select-down.png"
                                      alt="angle_down"
                                    />{" "}
                                  </div>
                                </div>
                                <div
                                  className={"Schedule_box"}
                                  style={{
                                    display: showResults ? "block" : "none",
                                  }}
                                >
                                  <h6>Which days does your class meet?</h6>
                                  <ul className="Schedule_list">
                                    <li>
                                      <a name="days" onChange={handleChange}>
                                        Monday, Wednesday, Friday
                                      </a>
                                    </li>
                                    <li>
                                      <a>Tuesday, Thursday</a>
                                    </li>
                                    <li>
                                      <li>
                                        <a className="show_days">{message}</a>
                                      </li>
                                    </li>
                                  </ul>
                                  <h6 className="mt-45">
                                    Create custom schedule
                                  </h6>
                                  <div className="Create-custom-schedule">
                                    <ul>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="Sunday"
                                          value="Sunday "
                                          id="Sunday"
                                          onChange={handleChang}
                                          className="custom-checkbox  "
                                        />

                                        <label htmlFor="Sunday">
                                          <span
                                            className="  title_1"
                                            onClick={handleClick}
                                          >
                                            S
                                          </span>
                                        </label>
                                      </li>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="Monday"
                                          value="Monday "
                                          id="Monday"
                                          onChange={handleChang}
                                          className="custom-checkbox "
                                        />
                                        <label
                                          className="bankClkTrack"
                                          htmlFor="Monday"
                                        >
                                          <span
                                            className=" title_1"
                                            onClick={handleClick}
                                          >
                                            M
                                          </span>
                                        </label>
                                      </li>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="days"
                                          value="Tuesday"
                                          id="Tuesday"
                                          className="custom-checkbox "
                                          onChange={handleChang}
                                        />
                                        <label
                                          className="bankClkTrack"
                                          htmlFor="Tuesday"
                                        >
                                          <span
                                            className=" title_1"
                                            onClick={handleClick}
                                          >
                                            Tu
                                          </span>
                                        </label>
                                      </li>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="days"
                                          value=" Wednesday"
                                          id="Wednesday"
                                          className="custom-checkbox "
                                          onChange={handleChang}
                                        />
                                        <label
                                          className="bankClkTrack"
                                          htmlFor="Wednesday"
                                        >
                                          <span
                                            className=" title_1"
                                            onClick={handleClick}
                                          >
                                            W
                                          </span>
                                        </label>
                                      </li>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="days"
                                          value="Thursday "
                                          id="Thursday"
                                          className="custom-checkbox "
                                          onChange={handleChang}
                                        />
                                        <label
                                          className="bankClkTrack"
                                          htmlFor="Thursday"
                                        >
                                          <span
                                            className=" title_1"
                                            onClick={handleClick}
                                          >
                                            Th
                                          </span>
                                        </label>
                                      </li>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="days"
                                          value="Friday "
                                          id="Friday"
                                          className="custom-checkbox "
                                          onChange={handleChang}
                                        />
                                        <label
                                          className="bankClkTrack"
                                          htmlFor="Friday"
                                        >
                                          <span
                                            className=" title_1"
                                            onClick={handleClick}
                                          >
                                            F
                                          </span>
                                        </label>
                                      </li>
                                      <li className="option">
                                        <input
                                          type="checkbox"
                                          name="days"
                                          value="Saturday"
                                          id="Saturday"
                                          className="custom-checkbox "
                                          onChange={handleChang}
                                        />
                                        <label
                                          className="bankClkTrack"
                                          htmlFor="Saturday"
                                        >
                                          <span
                                            className=" title_1"
                                            onClick={handleClick}
                                          >
                                            S
                                          </span>
                                        </label>
                                      </li>
                                    </ul>
                                  </div>{" "}
                                  <img
                                    src="assets/images/cross.png"
                                    className="cross_modal"
                                    alt="cross"
                                    onClick={() => onClick(false)}
                                  />{" "}
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="btn_Wrap mt-30">
                                <button
                                  type="submit"
                                  className="btn_black_theme w-100 d-block"
                                >
                                  Add class details
                                </button>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <hr className="line" />
                              <h1 className="sec_heading  ">
                                use this book in an existing class
                              </h1>
                              <div
                                className="accordion two_faq mt-20 mb-100"
                                id="accordionExample"
                              >
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="headingTwo"
                                  >
                                    <button
                                      className={
                                        chooseClass === "chooseClass"
                                          ? "accordion-button collapsed active"
                                          : "accordion-button collapsed"
                                      }
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                      onClick={(e) =>
                                        selectClass(e, "chooseClass")
                                      }
                                    >
                                      Choose a class
                                    </button>
                                  </h2>
                                  <div
                                    id="collapseTwo"
                                    className={
                                      chooseClass === "chooseClass"
                                        ? "accordion-collapse collapse show active"
                                        : "accordion-collapse collapse "
                                    }
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the second item's accordion body.{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      classTab === "classdetails"
                        ? "tab-pane fade show active"
                        : "tab-pane fade show "
                    }
                    id="class_details"
                    role="tabpanel"
                    aria-labelledby="class_details"
                  >
                    <div className="row class_info_wrap">
                      <div className="col-lg-9">
                        <div className="links_wrap d-flex justify-content-between">
                          <a className="btn_link_step   ml-auto pt-100 ">
                            {"<"} Previous step
                          </a>{" "}
                          <a className="btn_link_step  -end ml-auto pt-100 ">
                            Skip for now
                          </a>{" "}
                        </div>
                        <h1 className="main_title  ">
                          any sections or <br></br>instructors?
                        </h1>
                        <div className="border_dots mt-20"></div>
                        <h1 className="sec_heading  mt-30">sections</h1>
                        <div className="deatils_section_info">
                          <ul>
                            <li>{spnNo}</li>
                            <li>|</li>
                            <li>Section 2</li>
                            <li>|</li>
                            <li>
                              <b>Callan Banner</b>
                            </li>
                          </ul>
                        </div>
                        <div className="deatils_section_info">
                          <ul>
                            <li>SPAN 101</li>
                            <li>|</li>
                            <li>Section 2</li>
                            <li>|</li>
                            <li>
                              <b>Callan Banner</b>
                            </li>
                          </ul>
                        </div>
                        <div className="add_btn_wrap ">
                          <button
                            className="btn_Add"
                            id="btn_Add"
                            type="button"
                            onClick={() => onClicks(true)}
                          >
                            Create new section{" "}
                            <img
                              src="assets/images/pluse.png"
                              alt="pluse"
                              className="pluse_icon"
                            />
                          </button>
                          <div
                            className={"Schedule_box create_box"}
                            style={{
                              display: creatSection ? "block" : "none",
                            }}
                          >
                            <h6>Create new section</h6>
                            <form className="App-form" onSubmit={handleAddTodo}>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="SPN 101"
                                      onChange={(e) => setSpnNo(e.target.value)}
                                    />{" "}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Section number"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Instructor first name"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Instructor last name"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Instructor email"
                                    />{" "}
                                  </div>
                                  <p className="text_info">
                                    *We’ll send the instructor an email inviting
                                    them to join Greyled{" "}
                                  </p>
                                  <div className="btn_Wrap mt-30">
                                    <button
                                      type="submit"
                                      className="btn_black_theme w-100 d-block"
                                    >
                                      Add section to class
                                    </button>
                                  </div>
                                </div>
                              </div>{" "}
                            </form>
                            <img
                              src="assets/images/cross.png"
                              className="cross_modal cross_Create_modal"
                              alt="cross"
                              onClick={() => onClicks(false)}
                            />{" "}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="btn_Wrap mt-45 mb-100">
                            <button
                              type="button"
                              className="btn_black_theme w-100 d-block"
                            >
                              Create classroom link
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      classTab === "addstudents"
                        ? "tab-pane fade show active"
                        : "tab-pane fade show "
                    }
                    id="add_students"
                    role="tabpanel"
                    aria-labelledby="add_students-tab"
                  >
                    <div className="row class_info_wrap">
                      <div className="col-lg-9">
                        <div className="links_wrap d-flex justify-content-between">
                          <a className="btn_link_step   ml-auto pt-100 ">
                            {"<"} Previous step
                          </a>{" "}
                          <a className="btn_link_step  -end ml-auto pt-100 ">
                            Skip for now
                          </a>{" "}
                        </div>
                        <h1 className="main_title  ">now add your students</h1>
                        <p className="theme_para mt-20">
                          Email your students the following link. They’ll
                          automatically be added to the class when they sign up
                          for Greyled.
                        </p>
                        <div className="linke_copy_box">
                          <h2 className="theme_para">
                            https://greyled.com/ZimottiSPN101{" "}
                            <a>
                              <img src="assets/images/linke.png" alt="linke" />
                            </a>
                          </h2>
                          <div className="linke_copy_tooltip">
                            {" "}
                            <a className="copy_linke_text">
                              Copy link to clipboard
                              <div className="tooltip_box">
                                <div className="inner_wrap">
                                  <p className="theme_para text-white">
                                    <b>Link copied -</b> Email it to <br />
                                    your students!
                                  </p>
                                </div>
                              </div>
                            </a>{" "}
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="btn_Wrap mt-45 mb-100">
                            <button
                              type="button"
                              className="btn_black_theme w-100 d-block"
                            >
                              Create class and start assigning
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="footer_bottom link_Wrap">
                    <p className="btn_link text_drak">
                      <a>giovanni zimotti</a> | <a>university of iowa</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Option 1: Bootstrap Bundle with Popper --{">"} */}
      <script
        type="application/javascript"
        src="assets/js/jquery.min.js"
      ></script>
      <script
        type="application/javascript"
        src="assets/js/bootstrap.bundle.min.js"
      ></script>
      <script type="application/javascript" src="assets/js/custom.js"></script>
      {/* <script>
          $(".Schedule_btn").click(function() {$(".Schedule_box").show()});
          $(".cross_modal").click(function() {$(".Schedule_box").hide()});
          $(".btn_Add").click(function() {$(".create_box").show()});
          $(".cross_Create_modal").click(function() {$(".create_box").hide()});
        </script> */}
    </div>
  );
}

export default CreateClass;
