import { CREATE_ORDER, GET_ORDERS, GET_ORDERS_ERROR } from "../actions/types"

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
    console.log(action)
    switch (action.type) {

    case GET_ORDERS:
        return { ...state, orders: action.payload }

    case CREATE_ORDER:
        const orders = [...state.orders]
        orders.push(action.payload)
        return { ...state, orders }
    

    case GET_ORDERS_ERROR:
        return { ...state, error: action.payload }

    default:
        return state
    }
}


export default OrdersReducer