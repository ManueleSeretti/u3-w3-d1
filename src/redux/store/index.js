import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducer";
import jobsReducer from "../reducer/jobsReducer";
import companysReducer from "../reducer/companysReducer";
import companysFavouritesReducer from "../reducer/companyFavouriteReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  companys: companysReducer,
  companysFavourites: companysFavouritesReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
