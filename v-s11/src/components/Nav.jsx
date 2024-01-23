import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import spotifyLogo from "./logo/Spotify_Logo.png";
export default function Nav() {
  let search = async () => {
    let div = document.querySelector("#searchResults .row");
    div.innerHTML = "";
    let searchQuery = ""; //document.querySelector('#searchField').value // gets the value from the search box

    if (searchQuery.length > 2) {
      //if there's a value in the search box => fetch the information from rapidapi & display the result
      document.querySelector("#searchResults").style.display = "block";

      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            searchQuery,
          {
            method: "GET",
            headers,
          }
        ); // gets the information

        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          let songs = result.data; // gets the songs info

          for (let x = 0; x < result.data.length; x++) {
            div.innerHTML += albumCard(result.data[x]);
          }
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      //else just hide the section!
      document.querySelector("#searchResults").style.display = "none";
    }
  };

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
                  <div className="row input-group mt-3 w-100">
                    <div className="col text-center">
                      <input
                        type="text"
                        className="form-control p-1"
                        id="searchField"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    <div
                      className="input-group-append col p-1 text-center"
                      // style="margin-bottom: 4%"
                    >
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                        //   onClick="search()"
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
