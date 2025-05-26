import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export const getAll = async <T>(endpoint: string): Promise<T> => {
    const { data } = await axiosInstanse.get<T>(endpoint);

    if (!data) {
        throw new Error('there are not any data');
    }

    return data;
};