const initialState = {
  items: [],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ACCOUNT_DATA":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;
