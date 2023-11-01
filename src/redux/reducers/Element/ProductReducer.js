const initialState = {
    product: {
        data: []
    },
    updateData: {},
    updateId: '',
    condition: '',
    conditionfalse: ''
}

export const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PRODUCT_STATE':

            console.log("ppp", action.payload)
            return {
                ...state,
                product: {
                    data: [...state.product.data, action.payload]
                }
            }
        case 'PRODUCT_DELETE':
            let deletevalue = state.product.data.filter((elm) => elm != action.payload)
            console.log(deletevalue, "22...")
            return {
                ...state,
                product: {
                    data: deletevalue
                }
            }
        case 'PRODUCT_UPDATE_STATE':

            return {
                ...state,
                updateData: action.payload
            }

        case 'VALUE_UPDATE':
            let res = state.product.data.filter((elm) => elm.slug != action.payload.slug)
            return {
                ...state,
                product: {
                    data: [...res, action.payload]
                },
            }

        default: return state

    }
}