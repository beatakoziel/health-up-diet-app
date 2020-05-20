export const LOGIN_ACTION = "LOGIN"
export const LOGOUT_ACTION = "LOGOUT"

export const reducer = (state, action ) => {
  switch (action.type) {
    case LOGIN_ACTION:
      localStorage.setItem("@token", state.token)
      return { ...state, isAuthenticated: true, token: action.token }
    case LOGOUT_ACTION:
      localStorage.clear()
      return { ...state, isAuthenticated: false, token: "" }
    default:
      return state
  }
}
