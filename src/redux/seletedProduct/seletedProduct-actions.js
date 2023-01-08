import actionTypes from "./seletedProduct-types";

const baseURL = "https://fakestoreapi.com";

export const loadCurrentItem = (itemId) => {
    return async (dispatch) => {
        const response = await fetch(`${baseURL}/products/${itemId}`)
        const resData = await response.json();

        dispatch({
            type: actionTypes.LOAD_CURRENT_ITEM,
            payload: { data: resData },
        });
    }

};

export const removeCurrentItem = () => {
    return {
        type: actionTypes.REMOVE_CURRENT_ITEM
    }
}