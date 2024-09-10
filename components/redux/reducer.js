import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER_LIST } from "./constants";

const initialState = {
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case SET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state;
    }
}