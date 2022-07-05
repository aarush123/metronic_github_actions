import axios from "axios";
import {IObject} from "../@types";

export const axiosInstance = axios.create({
    baseURL: "https://api.clouwoodstudio.com:3000/v1/"
});

export const registerUser = (body: IObject) => {
    axiosInstance.post("user/register", body);
}

