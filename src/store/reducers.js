import C from "./constants";

export default (state = {}, action) => {
  switch (action.type) {
    case C.LOADING:
      console.log("triggered", !state.loading);
      return {
        ...state,
        loading: !state.loading,
      };
    case C.SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case C.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case C.SET_SINGLE_DATA:
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};