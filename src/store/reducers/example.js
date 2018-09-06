import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
	leverPulled: false
};


const setLeverPulled = (state, action) => {
	return updateObject(state, {leverPulled: action.leverPulled})
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_LEVERPULLED:
			return setLeverPulled(state, action);
		default:
			return state;
	}
};

export default reducer;
