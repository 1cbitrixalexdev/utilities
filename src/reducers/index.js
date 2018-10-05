/**
 * Created by Stas on 05.10.2018.
 */
import tableData from "../tableData.js"

export const initialState = {
    data: tableData,
}

export function rootReducer(state = initialState) {
    return state
}