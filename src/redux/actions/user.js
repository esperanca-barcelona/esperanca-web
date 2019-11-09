export const getUser = (props) => (dispatch) => {
	dispatch({ type: 'GET_USER', data: props });
};
