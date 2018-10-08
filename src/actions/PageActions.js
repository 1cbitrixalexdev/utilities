/**
 * Created by Stas on 05.10.2018.
 */
export function setValue(index, item, val) {
    return {
        type: 'SET_VALUE',
        index: index,
        payload: {[item]: val}
    }
}