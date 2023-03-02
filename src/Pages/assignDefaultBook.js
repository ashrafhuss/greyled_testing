import React from "react";
import Header from "./header";
import SideBar from "./SideBar";
import { useState } from "react";
const AssignDefaultBook = () => {
  return (
    <div className="">
      <Header />
      <section className="class_room_wrap">
        <div className="custom_container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-12 col-md-12 px-0 left_side_bar  pb-0">
              <SideBar />
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-12  ">
              <div className="inner_header">
                <div className="row align-items-center">
                  <div className="col-xl-8 col-lg-12">
                    <div className="content_wrap">
                      <h5>
                        EXPLORATIONS: An Open... | <span>shook et al.</span>
                      </h5>
                      <h5>CHAPTER 1, SECTION 1</h5>{" "}
                    </div>
                  </div>
                  <div className="col-xl-4  col-lg-12">
                    <div className="right_content">
                      <h5>
                        <u>all activities</u> in <u>book</u> from{" "}
                        <u>all universities</u>
                      </h5>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="main_content">
                    <h4 className="sub_heading max_550">
                      Introduction to Biological Anthropology
                    </h4>
                    <p className="theme_para_se">
                      Katie Nelson, Ph.D., Inver Hills Community CollegeLara
                      Braff, Ph.D., Grossmont CollegeBeth Shook, Ph.D.,
                      California State University, ChicoKelsie Aguilera, M.A.,
                      Leeward Community College
                    </p>
                    <hr />
                    <h4 className="mini_heading">Learning Objectives</h4>
                    <ul className="list_style mb-25">
                      <li>
                        {" "}
                        Define anthropology and the main anthropological
                        approaches.
                      </li>
                      <li>
                        Describe the origins and early development of
                        anthropology.
                      </li>
                      <li>
                        Identify the four subdisciplines of anthropology and
                        specify the focus of each one.
                      </li>
                      <li>
                        Define biological anthropology, describe its key
                        questions, and identify major subfields.
                      </li>
                      <li>Explain key components of the scientific method.</li>
                      <li>
                        Differentiate between hypotheses, theories, and laws.
                      </li>
                      <li>Differentiate science from other ways of knowing.</li>
                    </ul>
                    <p className="theme_para_se">
                      The first time one of the authors [Katie Nelson] heard of
                      biological anthropology, she was a first-year college
                      student at Macalester College in Saint Paul, Minnesota,
                      taking her first-ever anthropology course. Before she
                      enrolled in the class she {"didn’t"} really know what
                      anthropology meant. She knew it had something to do with
                      people, but {"didn’t"} know how it all fit together. The
                      course description appealed to her, so she signed up. She
                      quickly learned that anthropology was the study of humans
                      and that it was an incredibly broad discipline that
                      included explorations of cultural diversity, human
                      origins, past human societies, and human languages, among
                      a great many other subjects. She had always been
                      interested in learning about people. She enjoyed observing
                      the different ways people interacted in public spaces,
                      like the mall or the zoo. She enjoyed learning Spanish in
                      high school and loved listening to how people who spoke
                      different languages produced different sounds. She was
                      curious about how people inherited unique characteristics
                      from their parents and was especially intrigued by
                      immigration and migration and what caused people to uproot
                      themselves and move to another part of the world. During
                      the second week of class she began to learn about
                      biological anthropology and some of the leading theories
                      for how and why ancient humans left Africa and migrated
                      throughout the world. As she sat in class, she vividly
                      remembers imagining a small group of ancient humans
                      walking barefoot together through the African savannah.
                      She imagined what they wore, what their language sounded
                      like, how they held hands, how they shared food, and so
                      on. She wondered why they were migrating and what they
                      would miss about their homeland. She was hooked on
                      anthropology!
                    </p>
                    <h4 className="mini_heading">After the introduction</h4>
                    <p className="theme_para_se">
                      {" "}
                      To reach your academic goals and pass your expectations,
                      finding and maintaining motivation and engagement in
                      school is an important first step to achievement and
                      success. This section can help give ideas on how to find
                      and maintain motivation to engage in the things you want
                      to do.
                    </p>
                    <div className="page_nation">
                      <h6>Dec ‘21</h6>
                      <ul>
                        <li>
                          <a href="">1</a>
                        </li>
                        <li>
                          <a href="">2</a>
                        </li>
                        <li>
                          <a href="">3</a>
                        </li>
                        <li>
                          <a href="">4</a>
                        </li>
                        <li>
                          <a href="">5</a>
                        </li>
                        <li>
                          <a href="">6</a>
                        </li>
                        <li>
                          <a href="">7</a>
                        </li>
                        <li>
                          <a href="">8</a>
                        </li>
                        <li>
                          <a href="">9</a>
                        </li>
                        <li>
                          <a href="" className="active">
                            10
                          </a>
                        </li>
                        <li>
                          <a href="">11</a>
                        </li>
                        <li>
                          <a href="">12</a>
                        </li>
                        <li>
                          <a href="">13</a>
                        </li>
                        <li>
                          <a href="" className="last-child">
                            <img
                              src="assets/images/arrow_right_page.svg"
                              alt="arrow_right_page"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4  col-lg-12 left_side_bar right_side_bar">
                  <div className="box_detail">
                    <h5>
                      free response | Discussion | 3 more{" "}
                      <a href="">
                        <img src="assets/images/dimand.png" alt="dimand" />
                      </a>
                    </h5>
                    <h3>Definitions of terms</h3>
                    <p className="text_grey it line_limt mb-3">
                      Step One: In Chapter 1 of Explorations, we learned the
                      differe...
                    </p>
                    <p className="fw_500">What is knowledge?</p>
                    <p className="fw_500">What is belief?</p>
                    <p className="fw_500">
                      What is the difference between these two concepts?
                    </p>
                    <h5 className="mb-0 mt-3">
                      <a href="">
                        <b>+2</b> other tempers
                      </a>{" "}
                      <a href="">
                        <img
                          src="assets/images/arrow-right.png"
                          alt="arrow-right"
                        />
                      </a>
                    </h5>{" "}
                  </div>
                  <div className="box_detail box_detail_2">
                    <h5>
                      free response <span>Ch. one</span>
                    </h5>
                    <h3>belief of knowledge</h3>
                    <p className=" lh_16">
                      Write down some adjectives that describe the
                      characteristics of science and belief (you may also use
                      associated words, or those that can be used
                      interchangeably).
                    </p>
                  </div>
                  <div className="box_detail  box_shdow">
                    <h5>
                      free response <span>Ch. one</span>
                    </h5>
                    <h3>Biology vs. Culture</h3>
                    <p className=" lh_16">
                      Write down some adjectives that describe the
                      characteristics of biology and culture (you may also use
                      associated words, or those that can be used
                      interchangeably).
                    </p>
                  </div>
                  <div className="box_detail  box_shdow">
                    <h5>
                      free response | Discussion | 3 more <span>Ch. one</span>
                    </h5>
                    <h3>What is the meaning of life?</h3>
                    <div className="Create-custom-schedule choices_option">
                      <ul>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="Evolutionary"
                            className="custom-checkbox  "
                          />
                          <label for="Evolutionary">
                            <span className="  title_1">
                              Evolutionary fitness
                            </span>
                          </label>
                        </li>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="Crush"
                            className="custom-checkbox "
                          />
                          <label className="bankClkTrack" for="Crush">
                            <span className=" title_1">Crush your enemies</span>
                          </label>
                        </li>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="Find_happiness"
                            className="custom-checkbox "
                          />
                          <label className="bankClkTrack" for="Find_happiness">
                            <span className=" title_1">Find happiness</span>
                          </label>
                        </li>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="more"
                            className="custom-checkbox "
                          />
                          <label className="bankClkTrack" for="more">
                            <span className=" title_1">+4 more choices</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <h5 className="mb-0 mt-4">
                      <a href="">
                        <b>+6</b> other tempers
                      </a>{" "}
                    </h5>{" "}
                  </div>
                  <div className="box_detail  box_shdow">
                    <h5>
                      multiple choice <span>Ch. one</span>
                    </h5>
                    <h3>What is the meaning of life?</h3>
                    <div className="Create-custom-schedule choices_option">
                      <ul>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="Evolutionary1"
                            className="custom-checkbox  "
                          />
                          <label for="Evolutionary1">
                            <span className="  title_1">
                              Evolutionary fitness
                            </span>
                          </label>
                        </li>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="Crush1"
                            className="custom-checkbox "
                          />
                          <label className="bankClkTrack" for="Crush1">
                            <span className=" title_1">Crush your enemies</span>
                          </label>
                        </li>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="Find_happiness1"
                            className="custom-checkbox "
                          />
                          <label className="bankClkTrack" for="Find_happiness1">
                            <span className=" title_1">Find happiness</span>
                          </label>
                        </li>
                        <li className="option">
                          <input
                            type="checkbox"
                            name="days"
                            value=" "
                            id="more1"
                            className="custom-checkbox "
                          />
                          <label className="bankClkTrack" for="more1">
                            <span className=" title_1">+4 more choices</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <h5 className="mb-0 mt-4">
                      <a href="">
                        <b>+6</b> other tempers
                      </a>{" "}
                    </h5>{" "}
                  </div>
                  <div>
                    <button type="button" className="create_btn">
                      Create your own activity
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssignDefaultBook;
