import axios from 'axios'; 
import { API_BASE_URL } from "../../config/api";
import {
  GET_USER_PROFILE_REQUEST, 
  GET_USER_PROFILE_SUCCESS, 
  GET_USER_PROFILE_FAILURE, 
  LOGIN_USER_REQUEST, 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_FAILURE, 
  REGISTER_USER_REQUEST, 
  REGISTER_USER_SUCCESS, 
  REGISTER_USER_FAILURE,
  LOGOUT_USER
} from './ActionType';

export const loginUser = (loginData) => async (dispatch) => {
  dispatch({type: LOGIN_USER_REQUEST});
  try {
    const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    console.log("Login response:", data);
    if(data.token) {
      console.log("Storing token in localStorage");
      localStorage.setItem("jwt", data.token);
      dispatch({type: LOGIN_USER_SUCCESS, payload: data.token});
    } else {
      console.log("No token in response");
      dispatch({type: LOGIN_USER_FAILURE, payload: "Invalid response from server"});
    }
  } catch (error) {
    console.log("Login error:", error);
    const errorMessage = error.response?.data?.message || error.message || "Login failed";
    dispatch({type: LOGIN_USER_FAILURE, payload: errorMessage});
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  dispatch({type: REGISTER_USER_REQUEST});
  try {
    const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);
    console.log("signup User", data);
    if(data.token) {
      localStorage.setItem("jwt", data.token);
      dispatch({type: REGISTER_USER_SUCCESS, payload: data.token});
    } else {
      dispatch({type: REGISTER_USER_FAILURE, payload: "Invalid response from server"});
    }
  } catch (error) {
    console.log("error", error);
    const errorMessage = error.response?.data?.message || error.message || "Registration failed";
    dispatch({type: REGISTER_USER_FAILURE, payload: errorMessage});
  }
};

export const getUserProfile = (jwt) => async (dispatch) => {  
  dispatch({type: GET_USER_PROFILE_REQUEST});
  try {
    const {data} = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: { 
        "Authorization": `Bearer ${jwt}` 
      }
    });
    dispatch({type: GET_USER_PROFILE_SUCCESS, payload: data});
  } catch (error) {
    console.log("error", error);
    const errorMessage = error.response?.data?.message || error.message || "Failed to get user profile";
    dispatch({type: GET_USER_PROFILE_FAILURE, payload: errorMessage}); 
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: LOGOUT_USER });
};