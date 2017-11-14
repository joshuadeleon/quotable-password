import Vue from 'vue'

export default {
  SET_MAX_LENGTH: (state, length) => {
    Vue.set(state, 'maxLength', length)
  },
  SET_MIN_LENGTH: (state, length) => {
    Vue.set(state, 'minLength', length)
  },
  SET_REMOVE_SPACES: (state, remove) => {
    Vue.set(state, 'removeSpaces', remove)
  }
}
