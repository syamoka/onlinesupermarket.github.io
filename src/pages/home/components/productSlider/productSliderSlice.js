import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import minimarketdata from "../../../../JSON/minimarket.json";
import fourBanner from "../../../../JSON/fourBanner.json";
import footerLinksdata from "../../../../JSON/footerLinks.json";
import datas from "../../../../JSON/data.json"

export const environment = {
  api_url: "../../../../JSON/data.json",
};

export const getData = createAsyncThunk("products/getData", async () => {
  const response = datas
  return response
});


const initialState = {
  minimarketData: minimarketdata,
  fourBannerData: fourBanner,
  fullAmount: null,
  orderAmount: null,
  deliveryPrice: 500,
  counter: 0,
  basket: [],
  favorites: [],
  favoriteCounter: 0,
  Loading: false,
  error: null,
  alldata: [],
  dataFooterLinks: footerLinksdata,
};

export const productSliderSlice = createSlice({
  name: "productSlider",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.alldata.map((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
        }
      });
    },

    decrementCount: (state, action) => {
      state.alldata.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count -= 1;
        }
      });
    },

    incrementCounter: (state, action) => {
      state.counter += 1;
      state.basket.push(action.payload);
    },

    incrementFavoriteCounter: (state, action) => {
      state.favoriteCounter += 1;
      state.favorites.push(action.payload);
    },

    decrementFavoriteCounter: (state, action) => {
      state.favorites.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count -= 1;
        }
      });
    },

    deletefromFavorite: (state, action) => {
      state.favorites.map((item) => {
        if (item.id === action.payload.id) {
          state.favoriteCounter -= 1;
          state.favorites = state.favorites.filter(
            (item) => item.id !== action.payload.id
          );
        }
      });
    },

    deleteAllBasket: (state) => {
      state.basket = [];
      state.counter = 0;
    },

    deleteProduct: (state, action) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
      state.counter -= 1;
    },

    orderCount: (state) => {
      state.basket.map((item) => {
        if (item.count === 1) {
          state.orderAmount = state.orderAmount + item.totalPrice;
          state.fullAmount = state.orderAmount + state.deliveryPrice;
        }
      });
    },

    incrementSelectedProductCount: (state, action) => {
      state.basket.map((item) => {
        if (item.id === action.payload.id) {
          item.count += 1;
          item.totalPrice = item.price * item.count;
          state.orderAmount += item.totalPrice;
          state.fullAmount = state.orderAmount + state.deliveryPrice;
        }
      });
    },

    decrementSelectedProductCount: (state, action) => {
      state.basket.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count -= 1;
          item.totalPrice = item.price * item.count;
          state.orderAmount += item.totalPrice;
          state.fullAmount = state.orderAmount + state.deliveryPrice;
        }
      });
    },
  },

  extraReducers(builder) {
    //GET DATA

    builder.addCase(getData.pending, (state) => {
      state.Loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.Loading = false;
      state.alldata = action.payload;
    });

    builder.addCase(getData.rejected, (state, action) => {
      state.Loading = false;
      state.error = action.error.message;
    });
  },
});

export const newData = (state) => state.productSlider.alldata;
export const counter = (state) => state.productSlider.counter;
export const basketState = (state) => state.productSlider.basket;
export const favoriteCounter = (state) => state.productSlider.favoriteCounter;
export const fullamount = (state) => state.productSlider.fullAmount;
export const deliveryCount = (state) => state.productSlider.deliveryPrice;
export const ordercount = (state) => state.productSlider.orderAmount;
export const minimarketState = (state) => state.productSlider.minimarketData;
export const favorites = (state) => state.productSlider.favorites;
export const fourBannerState = (state) => state.productSlider.fourBannerData;
export const footerLinksTitles = (state) => state.productSlider.dataFooterLinks;

export const {
  incrementCount,
  decrementCount,
  incrementCounter,
  incrementFavoriteCounter,
  deleteAllBasket,
  deleteProduct,
  incrementSelectedProductCount,
  decrementSelectedProductCount,
  orderCount,
  deletefromFavorite,
} = productSliderSlice.actions;

export default productSliderSlice.reducer;
