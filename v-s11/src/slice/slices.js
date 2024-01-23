import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  favsongs: [],
  homesongs: [],
  loading: false,
  error: false,
};
export const getHomeSongs = createAsyncThunk("users/fetch", async (query) => {
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
  await axios
    .get(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + "queen",
      headers
    )
    .then((res) => {
      console.log(res);
      return res;
    });
});

export const slices = createSlice({
  name: "AllSongs",
  initialState: initialState,

  reducers: (create) => ({
    addFav: create.reducer((state, action) => {
      console.log(action);
      state.favsongs.push(action.payload);
    }),
    deleteFav: create.reducer((state, action) => {
      console.log(action);
      state.favsongs = state.favsongs.filter(
        (ele) => ele._id !== action.payload._id
      );
    }),
  }),

  extraReducers: (builder) => {
    builder
      .addCase(getHomeSongs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getHomeSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = "Errore nel caricamento dei dati!!!";
      })
      .addCase(getHomeSongs.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.homesongs = action.payload.data;
      });
  },
});

const { reducer, actions } = slices;
export const { addFavorites, deleteFav } = actions;
export default reducer;
