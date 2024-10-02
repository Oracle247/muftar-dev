// import { apiSlice } from "../api/apiSlice";
// import reducer from "../store/reducer"; // Importing the combined reducer
// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// // Define the persist configuration
// const persistConfig = {
//   key: "root",
//   storage,
// };

// // Wrap the rootReducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, reducer);

// // Create the store
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(apiSlice.middleware),
//   devTools: process.env.NODE_ENV !== "production",
// });

// // Define the RootState type
// export type RootState = ReturnType<typeof store.getState>;

// // Export the store and persistor
// export const persistor = persistStore(store);
// export default store;

import { apiSlice } from "../api/apiSlice";
import reducer from "../store/reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define the persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware), // Add the apiSlice middleware here
  devTools: true,
});
// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Export the store and persistor
export const persistor = persistStore(store);
export default store;
