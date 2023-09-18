export const SET_JOBS = "SET_JOBS";
export const SET_COMPANYS = "SET_COMPANYS";
export const ADD_COM_FAV = "ADD_COM_FAV";
export const DEL_FAV = "DEL_FAV";

export const setJobsAction = (data) => ({ type: SET_JOBS, payload: data });
export const setCompanysAction = (data) => ({ type: SET_COMPANYS, payload: data });
export const addComAction = (data) => ({ type: ADD_COM_FAV, payload: data });
export const delComAction = (data) => ({ type: DEL_FAV, payload: data });

export const getJobsAction = (params) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanysAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const submitAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobsAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
