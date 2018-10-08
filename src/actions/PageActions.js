/**
 * Created by Stas on 05.10.2018.
 */
export const SET_VALUE = 'SET_VALUE'
export const RESET_VALUES = 'RESET_VALUES'
export const CLEAR_VALUES = 'CLEAR_VALUES'

export function setValue(index, item, val) {
    return {
        type: SET_VALUE,
        index: index,
        payload: {[item]: val}
    }
}

export function resetValues() {
    return {
        type: RESET_VALUES
    }
}

export function clearValues() {
    return {
        type: CLEAR_VALUES
    }
}