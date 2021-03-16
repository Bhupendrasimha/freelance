import {
  DELETE_DATA,
  EDIT_DATA,
  POST_DATA,
  GET_DATA,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS,
} from "./actionType";
import axios from "axios";

export const getData = () => ({
  type: GET_DATA,
});

export const getDataSuccess = (payload) => ({
  type: GET_DATA_SUCCESS,
  payload,
});

export const getDataFailure = () => ({
  type: GET_DATA_FAILURE,
});

export const getEmployeesData = () => (dispatch) => {
  dispatch(getData());
  axios({
    method: "GET",
    url: "http://localhost:5000/admin/employeesDetails",
  })
    .then((res) => {
      dispatch(getDataSuccess(res.data));
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      dispatch(getDataFailure());
    });
};

export const deleteData = (payload) => ({
  type: DELETE_DATA,
});

export const deleteEmployee = (payload) => (dispatch) => {
  dispatch(deleteData());
  // console.log(payload)
  return axios({
    method: "DELETE",
    url: `http://localhost:5000/admin/${payload}`,
  })
    .then((res) => {
      console.log(res);
      //dispatch(getEmployeesData())
    })
    .catch((err) => console.log(err));
};

export const editData = () => ({
  type: EDIT_DATA,
});

export const editEmployeeData = (id, payload) => (dispatch) => {
  dispatch(editData());

  console.log(id + "check");
  return axios({
    method: "PUT",
    // headers:'Access-Control-Allow-Origin: *',
    url: `http://localhost:5000/admin/${id}`,
    data: payload,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

export const postData = () => ({
  type: POST_DATA,
});

export const postEmployeeData = (payload) => (dispatch) => {
  dispatch(postData());

  return axios({
    method: "POST",
    url: "http://localhost:5000/admin/employees",
    data: payload,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((Error) => console.log(Error));
};
