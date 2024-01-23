import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import FooterPlayer from "./FooterPlayer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeSongs } from "../slice/slices";
import { all } from "axios";

export default function Home() {
  let state = useSelector(async (state) => state.homesongs);

  const [allSongs, setAllSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);
  const [unique, setUnique] = useState([]);
  const dispatch = useDispatch();
  // console.log(state);
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
  let allArtists = rockArtists.concat(popArtists, hipHopArtists);
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  // useEffect(() => {
  //   dispatch(getHomeSongs());
  // }, []);
  // function albumCard(songInfo) {
  //   // songInfo represents the info for the current song
  //   // creating the wrapper div
  //   return `
  //         <div class="col card bg-dark text-center m-1" style="width: 10em" id=${
  //           songInfo.id
  //         }>
  //           <a href="/album_page.html?id=${songInfo.album.id}">
  //             <img class="img-fluid" src=${
  //               songInfo.album.cover_medium
  //             } alt="1" />
  //           </a>
  //           <p>
  //             <a href="/album_page.html?id=${songInfo.album.id}">
  //               Album: "${
  //                 songInfo.album.title.length < 16
  //                   ? `${songInfo.album.title}`
  //                   : `${songInfo.album.title.substring(0, 16)}...`
  //               }"<br>
  //             </a>
  //             <a href="/artist_page.html?id=${songInfo.artist.id}">
  //               Artist: ${songInfo.artist.name}
  //             </a>
  //           </p>
  //           <button class="btn btn-success"  id="favButton"><3</button>
  //         </div>`;
  // }
  let handleArtist = async (artistName, type) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers,
        }
      ); // gets the information
      if (response.ok) {
        let result = await response.json(); // transforms the response to json
        let songInfo = result.data;
        // let div = document.querySelector(domQuerySelector);
        // div.innerHTML += albumCard(songInfo[0]); // create a new album tyle
        if (type === "rock") {
          setRockSongs((rockSongs) => [...rockSongs, songInfo[0]]);
          setUnique([...new Set(rockSongs)]);
          console.log(rockSongs);
        } else if (type === "pop") {
          setPopSongs((popSongs) => [...popSongs, songInfo[0]]);
        } else if (type === "hipHop") {
          setHipHopSongs((hipHopSongs) => [...hipHopSongs, songInfo[0]]);
        }
        return songInfo[0];
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    function ga() {
      rockArtists.map(async (artist, index) => {
        if (index < 4) {
          await handleArtist(artist, "rock");
        }
      });
      popArtists.map(async (artist, index) => {
        if (index < 4) {
          await handleArtist(artist, "pop");
        }
      });
      hipHopArtists.map(async (artist, index) => {
        if (index < 4) {
          await handleArtist(artist, "hipHop");
        }
      });
    }
    ga();

    // let rockRandomArtists = [];
    // let popRandomArtists = [];
    // let hipHopRandomArtists = [];

    // while (rockRandomArtists.length < 4) {
    //   // pushes elements inside the array until it has 4 strings
    //   let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]; // select an element from the array with an index between 0 and 7
    //   if (!rockRandomArtists.includes(artist)) {
    //     // checks if the artist is not already present in the array
    //     rockRandomArtists.push(artist); // pushes the artist in the array
    //   }
    // }

    // while (popRandomArtists.length < 4) {
    //   let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
    //   if (!popRandomArtists.includes(artist)) {
    //     popRandomArtists.push(artist);
    //   }
    // }

    // while (hipHopRandomArtists.length < 4) {
    //   let artist =
    //     hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
    //   if (!hipHopRandomArtists.includes(artist)) {
    //     hipHopRandomArtists.push(artist);
    //   }
    // }
    // async function ga() {
    //   for (let j = 0; j < rockRandomArtists.length; j++)
    //     await handleArtist(rockRandomArtists[j], "#rockSection");

    //   for (let k = 0; k < popRandomArtists.length; k++)
    //     await handleArtist(popRandomArtists[k], "#popSection");

    //   for (let l = 0; l < hipHopRandomArtists.length; l++)
    //     await handleArtist(hipHopRandomArtists[l], "#hipHopSection");
    // }
    // ga();
    // console.log(allSongs);
  }, []);
  // console.log(allSongs);
  // console.log(state);
  // rockSongs.filter((song, index) => {
  //   rockSongs.indexOf(song) === index;
  // });
  let popSlice = popSongs.slice(0, 3);
  let hipHopSlice = hipHopSongs.slice(0, 3);
  console.log(unique);
  return (
    <>
      <div className="row overflow-x-hidden">
        <div className="col-3 bg-dark overflow-x-hidden">
          <Nav />
        </div>
        <div className="col mb-5">
          <div className="col-12 col-md-9 w-100 mainPage">
            <div className="row">
              <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                <a href="#">TRENDING</a>
                <a href="#">PODCAST</a>
                <a href="#">MOODS AND GENRES</a>
                <a href="#">NEW RELEASES</a>
                <a href="#">DISCOVER</a>
              </div>
            </div>

            <div className="row w-100">
              <div className="col-10">
                <div id="rock">
                  <h2>Rock Classics</h2>
                  <div
                    className="w-100 row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-content-center imgLinks py-3"
                    id="rockSection"
                  >
                    {rockSongs.map((song, index) => {
                      return (
                        <div
                          className="col text-center"
                          key={Math.floor(Math.random() * allArtists.length)}
                        >
                          <a href={`/album_page.html?id=${song.album.id}`}>
                            <img
                              className="img-fluid"
                              src={song.album.cover_medium}
                              alt="1"
                            />
                          </a>
                          <p>
                            <a href={`/artist_page.html?id=${song.artist.id}`}>
                              Artist: {song.artist.name} | Album:
                              {song.title}
                            </a>
                          </p>
                        </div>
                      );

                      // console.log(song);
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="pop">
                  <h2>Pop Culture</h2>
                  <div
                    className="row row-cols-1 justify-content-center row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="popSection"
                  >
                    {popSlice.map((song, index) => {
                      // console.log(song);
                      return index < 4 ? (
                        <div
                          className="col text-center"
                          key={Math.floor(Math.random() * allArtists.length)}
                        >
                          <a href={`/album_page.html?id=${song.album.id}`}>
                            <img
                              className="img-fluid"
                              src={song.album.cover_medium}
                              alt="1"
                            />
                          </a>
                          <p>
                            <a href={`/artist_page.html?id=${song.artist.id}`}>
                              Artist: {song.artist.name} | Album:
                              {song.album.title}
                            </a>
                          </p>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <div id="hiphop">
                  <h2>#HipHop</h2>
                  <div
                    className="row row-cols-1 justify-content-center row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                    id="hipHopSection"
                  >
                    {hipHopSlice.slice(0, 4).map((song, index) => {
                      // console.log(song);
                      return (
                        <div
                          className="col text-center"
                          key={Math.floor(Math.random() * allArtists.length)}
                        >
                          <a href={`/album_page.html?id=${song.album.id}`}>
                            <img
                              className="img-fluid"
                              src={song.album.cover_medium}
                              alt="1"
                            />
                          </a>
                          <p>
                            <a href={`/artist_page.html?id=${song.artist.id}`}>
                              Artist: {song.artist.name} | Album:
                              {song.album.title}
                            </a>
                          </p>
                        </div>
                      );
                    })}
                  </div>
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
