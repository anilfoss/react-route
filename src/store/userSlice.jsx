import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constant/constant";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null,
        token: null,
        status: STATUS.IDLE,
    },
    reducers: {
        setUsername(state, action) {
            state.username = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    },
});

export const { setUsername, setToken, setStatus } = userSlice.actions;
export default userSlice.reducer;

export function getUserDetail(data) {
    return async function getUserDetailThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const userDetailAPI = await axios.post(
                `https://dummyjson.com/auth/login`,
                data
            );
            localStorage.setItem("token", userDetailAPI.data.token);
            console.log("userDetailAPI = ", userDetailAPI);
            dispatch(setUsername(userDetailAPI.data.username));
            dispatch(setToken(userDetailAPI.data.token));
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            console.error(error);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}
