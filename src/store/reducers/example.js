import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
	name: 'Bob',
	age: 55,
	isHuman: true,
	leverPulled: false
};

const setName = (state, action) => {
	return updateObject(state, {name: action.name})
};

const setLeverPulled = (state, action) => {
	console.log(action);
	return updateObject(state, {leverPulled: action.leverPulled})
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_NAME:
			return setName(state, action);
		case actionTypes.SET_LEVERPULLED:
			return setLeverPulled(state, action);
		default:
			return state;
	}
};

export default reducer;
