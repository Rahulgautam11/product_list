const initialState = {
    product: {
        data: []
    },
    updateId: '',
    condition: '',
    conditionfalse: ''
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCT_STATE':
            return {
                ...state,
                product: {
                    data: action.payload
                }
            }
        case 'PRODUCT_UPDATE_STATE':

            return {
                ...state,
                product: {
                    data: action.payload
                },
            }
        case 'PRODUCT_ID':

            return {
                ...state,
                updateId: action.payload
            }
        case 'STATE_CHECK':
            return {
                ...state,
                condition: action.payload
            }
        case 'STATE_False':
            return {
                ...state,
                conditionfalse: action.payload
            }

        default: return state

    }
}