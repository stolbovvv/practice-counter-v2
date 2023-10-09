const initialState = { value: 0 };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, value: state.value + 1 };
    case "DEC":
      return { ...state, value: state.value - 1 };
    case "RND":
      return { ...state, value: action.payload };
    case "RES":
      return { ...state, value: 0 };
    default:
      return state;
  }
}
