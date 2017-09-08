import {
  LOGIN_ERROR,
  LOGIN_INFO,
  LOGIN_LOADING
} from './LoginTypes'

export const initial = {
  teste: 'LOGIN TESTE REDUX RUN'
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'TESTE':
      return { ...state, teste: action.payload }
    default:
      return state
  }
}
