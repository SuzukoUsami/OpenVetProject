import axios from "axios";

const config = {
    baseURL: "http://localhost:3001",
    responseType: "json",
};

const api = axios.create(config);

export default async function getPartFromId(partId) {
    try {
        const response = await api.get(`/parts?id=${partId}`);
        console.log(response);
        return response.data[0];
    } catch (error) {
        console.error(error);
        return error;
    }
}
