import shoppingTypes from "./shopping-types";

export const addToCart = (itemID) => {
    return {
        type: shoppingTypes.ADD_TO_CART,
        payload: { id: itemID }
    }
};

export const removeFromCart = (itemID) => {
    return {
        type: shoppingTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        },
    };
};

export const adjustItemQty = (itemID, qty) => {
    return {
        type: shoppingTypes.ADJUST_ITEM_QTY,
        payload: {
            id: itemID,
            qty,
        },
    };
};

const baseURL = "https://fakestoreapi.com";

export const loadCurrentItem = (itemId) => {
    return async (dispatch) => {
        const response = await fetch(`${baseURL}/products/${itemId}`)
        const resData = await response.json();

        dispatch({
            type: shoppingTypes.LOAD_CURRENT_ITEM,
            payload: { data: resData },
        });
    }

};

export const loadProducts = () => {
    return async (dispatch) => {
        const response = await fetch(`${baseURL}/products`);
        const resData = await response.json();

        dispatch({
            type: shoppingTypes.LOAD_DATA,
            payload: resData,
        })
    }
};

export const removeCurrentItem = () => {
    return {
        type: shoppingTypes.REMOVE_CURRENT_ITEM
    }
}