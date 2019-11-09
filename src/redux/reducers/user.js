export const initialState = {
	user: {}
};

export default function getUser(state = initialState, action) {
	switch (action.type) {
		case 'GET_USER':
			return {
				...state,
				user: action.data
			};
		default:
			return state;
	}
}
