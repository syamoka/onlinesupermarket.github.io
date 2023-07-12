import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from "../pages/home/components/sidebar/sidebarSlice";
import productSliderReducer from "../pages/home/components/productSlider/productSliderSlice";

import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const reducer = combineReducers({
  productSlider: productSliderReducer,
  sidebarSlice: sidebarReducer,
})
const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
  reducer: persistedReducer,
});
