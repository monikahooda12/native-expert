import { API_BASE_URL } from "../constant/Url";

import _Fetch from "./ApiService";


export const LOGINSERVICE = () => {

    return _Fetch("POST", `${API_BASE_URL}`, options, {})

}