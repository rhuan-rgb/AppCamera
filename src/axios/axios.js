import axios from "axios";

const api = axios.create({
    baseURL: "",
    headers:{
        accept: "application/json",
        "Content-Type" : "application/json",
        "X-AIO-Key" : ""
    },
});

const sheets = {
    toggleLED: (stateLED) => api.post("", stateLED),
};

export default sheets;