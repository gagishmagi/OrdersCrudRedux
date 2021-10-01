import { CREATE_ORDER, GET_ORDERS } from "../actions/types"

const initialState = {
    orders: [
        {
            id: 1,
            amount: 5
        }
    ]
}

const  OrdersReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {

    case GET_ORDERS:
        return { ...state }

    case CREATE_ORDER:
        const orders = [...state.orders]
        orders.push(action.payload)
        return { ...state, orders }
    

    default:
        return state
    }
}


export default OrdersReducer