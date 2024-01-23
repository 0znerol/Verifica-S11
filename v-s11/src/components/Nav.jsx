import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import spotifyLogo from "./logo/Spotify_Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Nav() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  return (
    <div className="col-3 position-fixed h-100">
      <nav
        className="navbar navbar-expand-md navbar-dark bg-navbar fixed-left justify-content-between d-flex flex-column h-100"
        id="sidebar"
      >
        <div className="nav-container">
          <a className="navbar-brand" href="index.html">
            <img src={spotifyLogo} alt="Spotify_Logo" width="131" height="40" />
          </a>
          {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
          <div className=" navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="list-unstyled">
                <li>
                  <a className="nav-item nav-link" href="index.html">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a className="nav-item nav-link" href="#">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                    Library
                  </a>
                </li>
                <li>
                  <div className="row input-group mt-3 w-100 p-0">
                    <div className="col p-0">
                      <input
                        type="text"
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                        className="form-control ms-3 rounded-top-left-0"
                        id="searchField"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div
                      className="ms-3 input-group-append col ps-0 h-100"
                      // style="margin-bottom: 4%"
                    >
                      <button
                        className="btn btn-outline-secondary btn-sm p-2"
                        type="button"
                        id="button-addon1"
                        onClick={() => {
                          navigate(`/search/${searchQuery}`);
                        }}
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-5 pb-4">
          <div className="nav-btn">
            <button className="btn signup-btn btn-light" type="button">
              Sign Up
            </button>
            <button className="btn login-btn border text-light" type="button">
              Login
            </button>
          </div>
          <div className="row">
            <div className="col">
              <a href="#" className="fs-6">
                Cookie Policy
              </a>{" "}
            </div>
            <div className="col">
              <a href="#" className="fs-6">
                {" "}
                Privacy
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
