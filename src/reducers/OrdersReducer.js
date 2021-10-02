import { CREATE_ORDER, GET_ORDERS, DELETE_ORDER, GET_ORDERS_ERROR } from "../actions/types"

const initialState = {
    orders: [
        {
            id: 1,
            amount: 5
        }
    ],
    error: ''
}

const  OrdersReducer = (state = initialState, action) => {
    switch (action.type) {

    case GET_ORDERS:
        return { ...state, orders: action.payload }

    case CREATE_ORDER:
        return { ...state, orders: [...state.orders].push(action.payload) }
    
    case DELETE_ORDER:
        return { ...state, orders: state.orders.filter( (order) => order.id !== action.payload.id) }
    

    case GET_ORDERS_ERROR:
        return { ...state, error: action.payload }

    default:
        return state
    }
}


export default OrdersReducer