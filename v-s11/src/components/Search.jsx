import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import FooterPlayer from "./FooterPlayer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Search() {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    async function fetchSearch() {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
          {
            method: "GET",
            headers,
          }
        ); // gets the information
        if (response.ok) {
          let result = await response.json(); // transforms the response to json
          let songInfo = result.data;
          console.log(result);
          setResults(songInfo);
          // let div = document.querySelector(domQuerySelector);
          // div.innerHTML += albumCard(songInfo[0]); // create a new album tyle
        } else {
          console.log(response);
          console.log("error");
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchSearch();
  }, [query]);
  console.log(query);
  let rockArtists = [
    "queen",
    "u2",
    "thepolice",
    "eagles",
    "thedoors",
    "oasis",
    "thewho",
    "bonjovi",
  ];

  let popArtists = [
    "maroon5",
    "coldplay",
    "onerepublic",
    "jamesblunt",
    "katyperry",
    "arianagrande",
  ];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });

  //   function albumCard(songInfo) {
  //     // songInfo represents the info for the current song
  //     // creating the wrapper div
  //     return `
  //           <div class="col text-center" id=${songInfo.id}>
  //             <a href="/album_page.html?id=${songInfo.album.id}">
  //               <img class="img-fluid" src=${
  //                 songInfo.album.cover_medium
  //               } alt="1" />
  //             </a>
  //             <p>
  //               <a href="/album_page.html?id=${songInfo.album.id}">
  //                 Album: "${
  //                   songInfo.album.title.length < 16
  //                     ? `${songInfo.album.title}`
  //                     : `${songInfo.album.title.substring(0, 16)}...`
  //                 }"<br>
  //               </a>
  //               <a href="/artist_page.html?id=${songInfo.artist.id}">
  //                 Artist: ${songInfo.artist.name}
  //               </a>
  //             </p>
  //           </div>`;
  //   }

  let handleArtist = async (domQuerySelector) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
  };

  window.onload = async () => {
    let rockRandomArtists = [];
    let popRandomArtists = [];
    let hipHopRandomArtists = [];

    document.querySelector("#searchField").value = ""; // empties search field on page load

    while (rockRandomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!rockRandomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        rockRandomArtists.push(artist); // pushes the artist in the array
      }
    }

    while (popRandomArtists.length < 4) {
      let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      let artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    for (let j = 0; j < rockRandomArtists.length; j++)
      await handleArtist(rockRandomArtists[j], "#rockSection");

    for (let k = 0; k < popRandomArtists.length; k++)
      await handleArtist(popRandomArtists[k], "#popSection");

    for (let l = 0; l < hipHopRandomArtists.length; l++)
      await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
  };
  return (
    <>
      <div className="row overflow-x-hidden">
        <div className="col bg-dark overflow-x-hidden">
          <Nav />
        </div>
        <div className="col-9">
          <div className=" mainPage w-100">
            <div className="row w-100">
              <div className="col-8 w-100">
                <h2>Search Results</h2>

                <div id="results" className="d-flex flex-wrap w-100">
                  {results.map((result) => (
                    <div
                      className="card bg-dark text-light text-center py-3 m-2"
                      id="resultSection"
                      style={{ width: "10em", height: "15em" }}
                    >
                      <img
                        src={result.album.cover}
                        className=" align-self-center"
                        style={{ width: "10em", height: "10em" }}
                        alt=""
                      />
                      <h6 className="">{result.title}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row overflow-x-hidden">
        <FooterPlayer></FooterPlayer>
      </div>
    </>
  );
}
