import * as types from './mutation-types'

export const SET_MAX_LENGTH = ({ commit }, length) => {
  commit(types.SET_MAX_LENGTH, length)
}
export const SET_MIN_LENGTH = ({ commit }, length) => {
  commit(types.SET_MIN_LENGTH, length)
}
