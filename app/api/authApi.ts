import axiosClient from "./axiosClient";
import { UserReq } from "../Types/User";


export const createUser = async (userReq : UserReq) => await axiosClient.post('/user', userReq);