import React, { useEffect, useState } from "react";
import storage from "../services/storage";
import { useNavigate } from "react-router-dom";

function Header() {
  const [tabConent, setTabContent] = useState(false);
  const [profileTabs, setProfileTabs] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    const Storeuser = storage.get("user");
    const Storetoken = storage.get("xAuthToken");
    console.log(Storeuser);
    setUser(Storeuser);
    setToken(Storetoken);
    navigate("/header");
  }, []);
  
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    setUser("");
    setToken("");
    localStorage.clear();
    navigate("/studentSignin");
  };

  const setTabs = (e) => {
    setTabContent(!tabConent);
  };
  const setProfileTab = (e) => {
    setProfileTabs(!profileTabs);
  };
  return (
    <div className="">
      <header className="header">
        <div className="custom_container">
          <div className="header_inner">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-6 order_1">
                <div className="logo_wrap">
                  <a href="https://greyled.com">
                    <img src="assets/images/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-7 col-lg-12 order_3">
                <div className="search_wrap">
                  <div className="form-group search_input_wrap">
                    <input
                      type="text"
                      className="search_input"
                      placeholder="Search in Box"
                    />{" "}
                    <img
                      src="assets/images/search.svg"
                      className="search_icon"
                      alt="search"
                    />
                    <a>
                      <img
                        src="assets/images/filter.svg"
                        className="filter_icon"
                        alt="filter"
                      />
                    </a>
                  </div>
                  <div className="icon_with_button">
                    <div className="dropdown explore_btn mr-15">
                      <button
                        className={
                          tabConent
                            ? "btn btn-outline-dark dropdown-toggle active"
                            : "btn btn-outline-dark dropdown-toggle"
                        }
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={setTabs}
                      >
                        {" "}
                        <img
                          src="assets/images/explore.svg"
                          className="explore_icon mr-5"
                          alt="explore"
                        />
                        explore{" "}
                      </button>
                      <ul
                        className={
                          tabConent ? "dropdown-menu show" : "dropdown-menu"
                        }
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item">Action</a>
                        </li>
                        <li>
                          <a className="dropdown-item">Another action</a>
                        </li>
                        <li>
                          <a className="dropdown-item">Something else here</a>
                        </li>
                      </ul>
                    </div>
                    <div className="icon_text">
                      <a>
                        <img
                          src="assets/images/text.svg"
                          alt="text"
                          className="text_icon mr-15"
                        />
                      </a>
                      <a>
                        <img
                          src="assets/images/Aa.png"
                          alt="Aa"
                          className="text_icon "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-6 order_2">
                <div className="user_wrap">
                  <a>
                    <img
                      src="assets/images/question.svg"
                      alt="question"
                      className="question mr-15"
                    />
                  </a>
                  <a>
                    <img
                      src="assets/images/bell.svg"
                      alt="bell"
                      className="bell mr-15"
                    />
                  </a>
                  {user && token ? (
                    <div className="dropdown explore_btn mr-15">
                      <button
                        className={
                          profileTabs
                            ? "btn dropdown-toggle active"
                            : "btn dropdown-toggle"
                        }
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={setProfileTab}
                      >
                        {" "}
                        <img
                          src="../assets/images/user.png"
                          className="explore_icon mr-5"
                          alt="profile"
                        />
                        {user.firstName} {user.lastName}
                      </button>
                      <ul
                        className={
                          profileTabs ? "dropdown-menu show" : "dropdown-menu"
                        }
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a className="dropdown-item" onClick={logout}>
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
