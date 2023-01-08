import { combineReducers } from "redux";
import seletedProductReducer from "./seletedProduct/seletedProduct-reducer";
import shoppingReducer from "./shopping/shopping-reducer";

const RootReducer = combineReducers({
    shop: shoppingReducer,
    seletedProduct: seletedProductReducer
})

export default RootReducer;