import {SET_ERROR, SET_SUCCESS, SET_LOADING} from "../actionTypes/actionTypes";


const setError = (val) => {
	return {
		type: SET_ERROR,
		payload: val,
	};
};

const setSuccess = (val) => {
	return {
		type: SET_SUCCESS,
		payload: val,
	};
};

const setLoading = (val) => {
	return {
		type: SET_LOADING,
		payload: val,
	};
};

export { setError, setSuccess, setLoading };