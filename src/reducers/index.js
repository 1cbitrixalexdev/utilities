/**
 * Created by Stas on 05.10.2018.
 */
import tableData from "../tableData.js"

export const initialState = tableData

export function rootReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_VALUE':
            const updatedItems = state.map((row, item) => {
                if (item === action.index) {
                    return {...row, ...action.payload}
                }

                return row
            })
            return updatedItems

        default:
            return state
    }
}
