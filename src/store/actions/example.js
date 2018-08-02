import * as actionTypes from './actionTypes';

export const setName = (name) => {
	return {
		type: actionTypes.SET_NAME,
		name: name
	}
};

export const setLeverPulled = (isLeverPulled) => {
	return {
		type: actionTypes.SET_LEVERPULLED,
		leverPulled: isLeverPulled
	}
};
