/**
 * Created by Stas on 05.10.2018.
 */
import { createStore } from 'redux'
import { rootReducer, initialState } from '../reducers'

export const store = createStore(rootReducer, initialState)