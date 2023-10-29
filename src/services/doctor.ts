import {get} from "./api";

export const getDoctors = () => {
    return get("/doctors");
}