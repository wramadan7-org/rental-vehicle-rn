const initialState = {
  isLogin: false,
  isLoading: true,
  isError: false,
  token: '',
  alertMsg: '',
  success: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true
        // alertMsg: action.payload.data.message
      }
    }
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        // alertMsg: action.payload.data.message,
        token: action.payload.data.token,
        success: action.payload.data.success
      }
    }
    default : {
      return state
    }
  }
}
