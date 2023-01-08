import shoppingTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [],
    cart: [],
    // currentItem: null,
};



const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case shoppingTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map(item =>
                        item.id == action.payload.id ?
                            { ...item, qty: item.qty + 1 } :
                            item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };

        case shoppingTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case shoppingTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case shoppingTypes.LOAD_DATA:
            return {
                ...state,
                products: action.payload,
            };
        case shoppingTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                // currentItem: state.products.find((item) => item.id == action.payload.id),
                currentItem: action.payload.data
            };
        case shoppingTypes.REMOVE_CURRENT_ITEM:
            return {
                ...state,
                currentItem: null
            };
        default:
            return state;
    }
}

export default shoppingReducer;