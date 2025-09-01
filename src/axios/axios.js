import axios from "axios";

const api = axios.create({
    baseURL: "https://io.adafruit.com/api/v2/Rhuan_IOT/feeds/",
    headers:{
        accept: "application/json",
        "Content-Type" : "application/json",
        "X-AIO-Key" : "aio_uzbx33WD5rJqaYjym3NRqHR8CFwF"
    },
});

const sheets = {
    toggleLED: (stateLED) => api.post("botao-led/data", stateLED),
};

export default sheets;