export const goToLists = (props, e) => (dispatch) => {
	props.history.push('/lists', {e});
	dispatch({ type: 'GO_TO_DETAILS', data: 'DETAILS'});
};
export const goToHome = (props, e) => (dispatch) => {
	props.history.push('/');
	dispatch({ type: 'GO_TO_HOME', data: 'HOME' });
};
