import { configureStore } from "@reduxjs/toolkit";
import { phoneReducer } from "./phoneSlice";
import { filtersReducer } from "./filterSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  
  import storage from 'redux-persist/lib/storage';
  
  const rootReducer = combineReducers({
    contacts: phoneReducer,
    filter: filtersReducer,
  });
  
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filters'],
  };
  
  const persistedContactsReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedContactsReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);