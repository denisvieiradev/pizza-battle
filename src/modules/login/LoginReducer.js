import {
  LOGIN_ERROR,
  LOGIN_INFO,
  LOGIN_LOADING
} from './LoginTypes'

export const initial = {
  email: '',
  error: '',
  logged: false,
  loading: false,
  password: '',
  token: '',
}

export default (state = initial, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return { ...state, error: action.payload }
    case LOGIN_INFO:
      const { email, password, token } = action.payload

      return {
        ...state,
        email,
        password,
        token,
        logged: true,
        error: '',
      }
    case LOGIN_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
