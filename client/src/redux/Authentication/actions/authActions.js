export const generateCode = (signUpDetails) => {
  return async (dispatch) => {
    try {
      var val = Math.floor(1000 + Math.random() * 9000);
      dispatch({ type: "SAVE_CODE", payload: val });
      dispatch({ type: "ADD_USER", payload: signUpDetails });
    } catch (e) {
      console.log(e);
    }
  };
}



