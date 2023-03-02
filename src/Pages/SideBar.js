import React from "react";
import { useState } from "react";

export default function SideBar() {
  const [sideBar, setSideBar] = useState("");
  const [tabConent, setTabContent] = useState("class");
  const setTabs = (e, value) => {
    setTabContent(value);
  };
  const expendSidebar = (e, value) => {
    setSideBar(value);
  };
  return (
    <div>
      <div className="left_side_bar custom_nav">
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={
                tabConent === "content" ? "nav-link active" : "nav-link"
              }
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#Contents"
              type="button"
              role="tab"
              aria-controls="Contents"
              aria-selected="true"
              onClick={(e) => setTabs(e, "content")}
            >
              Contents
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={tabConent === "class" ? "nav-link active" : "nav-link"}
              id="classroom-tab"
              data-bs-toggle="tab"
              data-bs-target="#classroom"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={(e) => setTabs(e, "class")}
            >
              classroom
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className={
              tabConent === "content"
                ? "tab-pane fade show active"
                : "tab-pane fade show"
            }
            id="Contents"
            role="tabpanel"
            aria-labelledby="Contents-tab"
          >
            <div className="Contents_tabs">
              <div className="tab-content" id="myContents">
                <div
                  className="tab-pane fade show active custom_tabs_chapater"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div className="accordion" id="accordion_active">
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-Preface"
                      >
                        <button
                          className="accordion-button  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapsePreface"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapsePreface"
                        >
                          Preface
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapsePreface"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-Preface"
                      >
                        <div className="accordion-body">
                          <p className="f14">Title Page</p>
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-Biological"
                            >
                              <button
                                className={
                                  sideBar === "showbar"
                                    ? "accordion-button  main_head fw_700 bg_grey active"
                                    : "accordion-button  main_head fw_700 bg_grey collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseBiological"
                                aria-expanded={
                                  sideBar === "showbar" ? true : false
                                }
                                aria-controls="panelsStayOpen-collapseBiological"
                                onClick={(e) => expendSidebar(e, "showbar")}
                              >
                                Introduction to Biological Anthropology
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseBiological"
                              className={
                                sideBar === "showbar"
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              aria-labelledby="panelsStayOpen-Biological"
                            >
                              <div className="accordion-body bl ">
                                <p>
                                  <a href="">Belief or Knowledge?</a>
                                </p>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-anthropology"
                                  >
                                    <button
                                      className="accordion-button  main_head    "
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseanthropology"
                                      aria-expanded="true"
                                      aria-controls="panelsStayOpen-collapseanthropology"
                                    >
                                      what is anthropology?
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseanthropology"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-anthropology"
                                  >
                                    <div className="accordion-body  ">
                                      <p> what is anthropology?</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-Subdisciplines"
                                  >
                                    <button
                                      className="accordion-button  main_head    "
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseSubdisciplines"
                                      aria-expanded="true"
                                      aria-controls="panelsStayOpen-collapseSubdisciplines"
                                    >
                                      The Subdisciplines
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseSubdisciplines"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-Subdisciplines"
                                  >
                                    <div className="accordion-body bl ">
                                      <p>
                                        <a href="">Cultural Anthropology</a>
                                      </p>
                                      <p>
                                        <a href="">Biological Anthropology</a>
                                      </p>
                                      <p>
                                        <a href="">Biology vs. Culture</a>
                                      </p>
                                      <p>
                                        <a href="">Applied Anthropology</a>
                                      </p>
                                      <p>
                                        <a href="">Archaeology</a>
                                      </p>
                                      <p>
                                        <a href="">Linguistic Anthropology</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-headingAnthropology"
                                  >
                                    <button
                                      className="accordion-button collapsed  main_head  "
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseAnthropology"
                                      aria-expanded="false"
                                      aria-controls="panelsStayOpen-collapseAnthropology"
                                    >
                                      What is Biological Anthropology?
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseAnthropology"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="panelsStayOpen-headingAnthropology"
                                  >
                                    <div className="accordion-body">
                                      <p> What is Biological Anthropology?</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-Science"
                                  >
                                    <button
                                      className="accordion-button  main_head    "
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseScience"
                                      aria-expanded="true"
                                      aria-controls="panelsStayOpen-collapseScience"
                                    >
                                      Ways of Knowing: Science, Faith, and...
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseScience"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-Science"
                                  >
                                    <div className="accordion-body bl ">
                                      <p>
                                        <a href="">Science vs. Belief</a>
                                      </p>
                                      <p>
                                        <a href="">Review Questions</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2
                                    className="accordion-header"
                                    id="panelsStayOpen-Terms"
                                  >
                                    <button
                                      className="accordion-button  main_head    "
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#panelsStayOpen-collapseTerms"
                                      aria-expanded="true"
                                      aria-controls="panelsStayOpen-collapseTerms"
                                    >
                                      Key Terms
                                    </button>
                                  </h2>
                                  <div
                                    id="panelsStayOpen-collapseTerms"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="panelsStayOpen-Terms"
                                  >
                                    <div className="accordion-body  ">
                                      <p> Key Terms</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingEvolution"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseEvolution"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseEvolution"
                        >
                          Evolution
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseEvolution"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingEvolution"
                      >
                        <div className="accordion-body"> Evolution </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingGenetics"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseGenetics"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseGenetics"
                        >
                          Molecular Biology and Genetics
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseGenetics"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingGenetics"
                      >
                        <div className="accordion-body">
                          {" "}
                          Molecular Biology and Genetics{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingForces"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseForces"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseForces"
                        >
                          Forces of Evolution
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseForces"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingForces"
                      >
                        <div className="accordion-body">
                          {" "}
                          Forces of Evolution{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingPrimates"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapsePrimates"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapsePrimates"
                        >
                          Meet the Living Primates
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapsePrimates"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingPrimates"
                      >
                        <div className="accordion-body">
                          {" "}
                          Meet the Living Primates{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingBehavior"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseBehavior"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseBehavior"
                        >
                          Primate Ecology and Behavior
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseBehavior"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingBehavior"
                      >
                        <div className="accordion-body">
                          {" "}
                          Primate Ecology and Behavior{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingContext"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseContext"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseContext"
                        >
                          Understanding the Fossil Context
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseContext"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingContext"
                      >
                        <div className="accordion-body">
                          {" "}
                          Understanding the Fossil Context{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingContext1"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseContext1"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseContext1"
                        >
                          Primate Evolution
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseContext1"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingContext1"
                      >
                        <div className="accordion-body">
                          {" "}
                          Primate Evolution{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingHominins"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseHominins"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseHominins"
                        >
                          Early Hominins
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseHominins"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingHominins"
                      >
                        <div className="accordion-body"> Early Hominins </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingGenus"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseGenus"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseGenus"
                        >
                          Early Members of the Genus Homo
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseGenus"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingGenus"
                      >
                        <div className="accordion-body">
                          {" "}
                          Early Members of the Genus Homo{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingArchaic"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseArchaic"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseArchaic"
                        >
                          Archaic Homo
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseArchaic"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingArchaic"
                      >
                        <div className="accordion-body"> Archaic Homo </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingsapiens"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapsesapiens"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapsesapiens"
                        >
                          Modern Homo sapiens
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapsesapiens"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingsapiens"
                      >
                        <div className="accordion-body">
                          {" "}
                          Modern Homo sapiens{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingVariation"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseVariation"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseVariation"
                        >
                          Race and Human Variation
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseVariation"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingVariation"
                      >
                        <div className="accordion-body">
                          {" "}
                          Race and Human Variation{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingAdaptive"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseAdaptive"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseAdaptive"
                        >
                          Human Variation: An Adaptive Significance
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseAdaptive"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingAdaptive"
                      >
                        <div className="accordion-body">
                          {" "}
                          Human Variation: An Adaptive Significance{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingBioarchaeology"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseBioarchaeology"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseBioarchaeology"
                        >
                          Bioarchaeology and Forensic Anthropology
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseBioarchaeology"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingBioarchaeology"
                      >
                        <div className="accordion-body">
                          {" "}
                          Bioarchaeology and Forensic Anthropology{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingBiology"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseBiology"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseBiology"
                        >
                          Contemporary Topics: Human Biology and Human Evo...
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseBiology"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingBiology"
                      >
                        <div className="accordion-body">
                          {" "}
                          Contemporary Topics: Human Biology and Human Evo...{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingAppendices"
                      >
                        <button
                          className="accordion-button collapsed  main_head fw_700"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseAppendices"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseAppendices"
                        >
                          Appendices
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseAppendices"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingAppendices"
                      >
                        <div className="accordion-body"> Appendices </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Activities"
                  role="tabpanel"
                  aria-labelledby="Activities-tab"
                >
                  <div className="Contents_tabs custom_tabs_chapater ">
                    <div className="accordion" id="accordion_active1">
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingKnowledge"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseKnowledge"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseKnowledge"
                          >
                            Belief or Knowledge?{" "}
                            <span className="chepter"> Ch. 1</span>
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseKnowledge"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingKnowledge"
                        >
                          <div className="accordion-body">
                            {" "}
                            Belief or Knowledge{" "}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingCulture"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseCulture"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseCulture"
                          >
                            Biology vs. Culture{" "}
                            <span className="chepter"> Ch. 1</span>
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseCulture"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingCulture"
                        >
                          <div className="accordion-body">
                            {" "}
                            Biology vs. Culture{" "}
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingBelief"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseBelief"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseBelief"
                          >
                            Science vs. Belief{" "}
                            <span className="chepter"> Ch. 1</span>
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseBelief"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingBelief"
                        >
                          <div className="accordion-body">
                            {" "}
                            Science vs. Belief
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingQuestions"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseQuestions"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseQuestions"
                          >
                            Review Questions{" "}
                            <span className="chepter"> Ch. 1</span>
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseQuestions"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingQuestions"
                        >
                          <div className="accordion-body">
                            {" "}
                            Review Questions
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingmeaning"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapsemeaning"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapsemeaning"
                          >
                            What is the meaning of life?{" "}
                            <span className="chepter"> Ch. 1</span>
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapsemeaning"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingmeaning"
                        >
                          <div className="accordion-body">
                            {" "}
                            What is the meaning of life?
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingUnderstanding"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseUnderstanding"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseUnderstanding"
                          >
                            Understanding the Fossil Context
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseUnderstanding"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingUnderstanding"
                        >
                          <div className="accordion-body">
                            Understanding the Fossil Context
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingPrimate"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapsePrimate"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapsePrimate"
                          >
                            Primate Evolution
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapsePrimate"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingPrimate"
                        >
                          <div className="accordion-body">
                            Primate Evolution
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingHominins"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseHominins"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseHominins"
                          >
                            Early Hominins
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseHominins"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingHominins"
                        >
                          <div className="accordion-body">Early Hominins</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingMembers"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseMembers"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseMembers"
                          >
                            Early Members of the Genus Homo
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseMembers"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingMembers"
                        >
                          <div className="accordion-body">
                            Early Members of the Genus Homo
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingArchaic"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseArchaic"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseArchaic"
                          >
                            Archaic Homo
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseArchaic"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingArchaic"
                        >
                          <div className="accordion-body">Archaic Homo</div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingModern"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseModern"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseModern"
                          >
                            Modern Homo sapiens
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseModern"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingModern"
                        >
                          <div className="accordion-body">
                            Modern Homo sapiens
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingHuman"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseHuman"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseHuman"
                          >
                            Race and Human Variation
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseHuman"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingHuman"
                        >
                          <div className="accordion-body">
                            Race and Human Variation
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingSignificance"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseSignificance"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseSignificance"
                          >
                            Significance Variation: An Adaptive Significance
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseSignificance"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingSignificance"
                        >
                          <div className="accordion-body">
                            Race and Human Variation
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingForensic"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseForensic"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseForensic"
                          >
                            Bioarchaeology and Forensic Anthropology
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseForensic"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingForensic"
                        >
                          <div className="accordion-body">
                            Bioarchaeology and Forensic Anthropology
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingTopics"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTopics"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTopics"
                          >
                            Contemporary Topics: Human Biology and Huma...
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseTopics"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingTopics"
                        >
                          <div className="accordion-body">
                            Contemporary Topics: Human Biology and Huma...
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="panelsStayOpen-headingAppendices"
                        >
                          <button
                            className="accordion-button collapsed  main_head fw_700"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseAppendices"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseAppendices"
                          >
                            Appendices
                          </button>
                        </h2>
                        <div
                          id="panelsStayOpen-collapseAppendices"
                          className="accordion-collapse collapse"
                          aria-labelledby="panelsStayOpen-headingAppendices"
                        >
                          <div className="accordion-body">Appendices</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Chapters"
                  role="tabpanel"
                  aria-labelledby="Chapters-tab"
                >
                  Chapters
                </div>
              </div>
              <ul className="nav nav-tabs" id="myContents_two" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    all
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Activities-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Activities"
                    type="button"
                    role="tab"
                    aria-controls="Activities"
                    aria-selected="false"
                  >
                    Activities
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="Chapters-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#Chapters"
                    type="button"
                    role="tab"
                    aria-controls="Chapters"
                    aria-selected="false"
                  >
                    Chapters
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              tabConent === "class"
                ? "tab-pane fade show active"
                : "tab-pane fade show"
            }
            id="classroom"
            role="tabpanel"
            aria-labelledby="classroom-tab"
          >
            <div className="tabs_content classroom_wrap">
              <div className="class_room_box">
                <div className="class_room_img">
                  {" "}
                  <img
                    src="assets/images/class_rom_img.png"
                    alt="class_rom_img"
                    className="class_rom_img"
                  />{" "}
                </div>
                <div className="class_room_content">
                  <div className="content_top">
                    <h6 className="text-uppercase text-grey">
                      You’re reading: --{">"} <span>NEW TEXT HERE</span>
                    </h6>
                    <h5>Liberated Learners</h5>
                    <h6 className="text-grey">
                      by The Author of Everything et al
                    </h6>{" "}
                  </div>
                  <div className="content_bottom">
                    <h6 className="text-black">
                      Classrooms used in:{" "}
                      <span className="text-uppercase">
                        84 --{">"} NEW TEXT
                      </span>
                    </h6>
                    <h6 className="text-black">
                      Activities created:{" "}
                      <span className="text-uppercase">
                        64 --{">"} NEW TEXT???
                      </span>
                    </h6>{" "}
                  </div>
                </div>
              </div>
              <h5 className="classroom_heading mt-65">your classroom</h5>
              <div className="spn_wrap mt-25">
                <div className="spn_inner">
                  <h5 className="mb-25">
                    SPN 101 | Giovanni Zimotti <span>Jan - May 2023</span>
                  </h5>
                  <div className="section_class">
                    <h5>Section 01</h5>
                    <div className="section_class_inner">
                      <div className="contetn_class">
                        <h3>
                          <span className="">Instructor</span>Callan Banner
                        </h3>
                        <h3>
                          <span className="">Students</span>0 enrolled
                        </h3>
                        <h3>
                          <span className="">Schedule</span>MWF 10:30 am - 12:30
                          pm
                        </h3>
                        <h3>
                          <span className="">Type</span>Hybrid
                        </h3>{" "}
                      </div>{" "}
                      <u>
                        <a href="">
                          ADD students{" "}
                          <img src="assets/images/arrow-right.png" />{" "}
                        </a>
                      </u>{" "}
                    </div>
                  </div>
                  <div className="section_class mt-30">
                    <h5>Section 01</h5>
                    <div className="section_class_inner">
                      <div className="contetn_class">
                        <h3>
                          <span className="">Instructor</span>Callan Banner
                        </h3>
                        <h3>
                          <span className="">Students</span>0 enrolled
                        </h3>
                        <h3>
                          <span className="">Schedule</span>MWF 10:30 am - 12:30
                          pm
                        </h3>
                        <h3>
                          <span className="">Type</span>Hybrid
                        </h3>{" "}
                      </div>{" "}
                      <u>
                        <a href="">
                          ADD students{" "}
                          <img src="assets/images/arrow-right.png" />{" "}
                        </a>
                      </u>{" "}
                    </div>
                  </div>
                  <div className="section_class mt-30">
                    <h5>Section 01</h5>
                    <div className="section_class_inner">
                      <div className="contetn_class">
                        <h3>
                          <span className="">Instructor</span>Callan Banner
                        </h3>
                        <h3>
                          <span className="">Students</span>42 enrolled
                        </h3>
                        <h3>
                          <span className="">Schedule</span>MWF 10:30 am - 12:30
                          pm
                        </h3>
                        <h3>
                          <span className="">Type</span>Hybrid
                        </h3>{" "}
                      </div>{" "}
                      <u>
                        <a href="">
                          see roster <img src="assets/images/arrow-right.png" />{" "}
                        </a>
                      </u>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_bottom mt-45">
                <button type="button" className="btn_light">
                  Back to library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
