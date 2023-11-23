import axios from "axios";

const config = {
    baseURL: "http://localhost:3006",
    responseType: "json",
};

const api = axios.create(config);

export async function getPartFromId(id) {
    try {
        const response = await api.get(`/parts?id=${id}`);
        //console.log(response);
        return response.data[0];
    } catch (error) {
        console.error(error);
        return error;
    }
}

export async function getAnimalFromId(id) {
    try {
        const response = await api.get(`/animals?id=${id}`);
        //console.log(response);
        return response.data[0];
    } catch (error) {
        console.error(error);
        return error;
    }
}
