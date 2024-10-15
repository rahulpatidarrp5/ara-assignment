import data from "../../sampleData";


export const getUserData = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_ACCOUNT_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};
