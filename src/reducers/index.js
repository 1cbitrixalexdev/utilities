/**
 * Created by Stas on 05.10.2018.
 */
import tableData from "../tableData.js"
import {SET_VALUE, RESET_VALUES, CLEAR_VALUES} from "../actions/PageActions"

export const initialState = tableData

export function rootReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_VALUE:
            const updatedItems = state.map((row, item) => {
                let result = {...row}
                if (item === action.index) {
                    return {...result, ...action.payload}
                }
                return result
            })
            return updatedItems

        case RESET_VALUES:
            return initialState

        case CLEAR_VALUES:
            const clearedItems = state.map((item) => {
                let result = {...item};
                if (item.current) result = {...result, 'current': 0};
                if (item.previous) result = {...result, 'previous': 0};
                if (!(item.used instanceof Function)) result = {...result, 'used': 0};
                return result
            })
            return clearedItems

        default:
            return state
    }
}
