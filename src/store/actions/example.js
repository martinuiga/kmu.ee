import * as actionTypes from './actionTypes';

export const setLeverPulled = (isLeverPulled) => {
	return {
		type: actionTypes.SET_LEVERPULLED,
		leverPulled: isLeverPulled
	}
};
