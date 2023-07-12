import { incrementFavoriteCounter } from "../productSliderSlice";
import { state } from "../productSliderSlice";

export function incrementFavoriteCount (el) {
   state.counter += 1
   state.favoriteCounter.push(el)
   console.log(state.favoriteCounter)
}