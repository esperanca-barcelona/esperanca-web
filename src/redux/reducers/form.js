const initialState = {
	date: {},
	place: ""
}

export default function form(state = initialState, action) {
	switch (action.type) {
		case 'SET_DETAILS':
			return {
				...state,
				date: action.date,
				place: action.place
			};
		case 'REMOVE_LIST':
			return {
				...state,
				firstSelectedItem: action.first,
				secondSelectedItem: action.second
			};
		default:
			return state;
	}
}
