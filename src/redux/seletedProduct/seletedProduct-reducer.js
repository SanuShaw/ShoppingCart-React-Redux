import actionTypes from "./seletedProduct-types";

const INITIAL_STATE = {};

const seletedProductReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                // currentItem: state.products.find((item) => item.id == action.payload.id),
                ...action.payload.data
            };
        case actionTypes.REMOVE_CURRENT_ITEM:
            return {};
        default:
            return state;
    }
}

export default seletedProductReducer;