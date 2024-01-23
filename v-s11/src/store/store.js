import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducer from "../slice/slices";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = {
  favsongs: persistReducer(persistConfig, reducer),
  homesongs: persistReducer(persistConfig, reducer),
  loading: persistReducer(persistConfig, reducer),
  error: persistReducer(persistConfig, reducer),
};

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
