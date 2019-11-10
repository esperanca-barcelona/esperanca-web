export const addDatePlacetoList = (date, place) => (dispatch) => {
	dispatch({ type: 'SET_DETAILS', date, place});
};
export const removeList = () => (dispatch) => {
	dispatch({ type: 'REMOVE_LIST' });
};