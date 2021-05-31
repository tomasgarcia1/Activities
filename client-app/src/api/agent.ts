import axios, { AxiosResponse } from 'axios';
import { Activity } from '../app/models/activity';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody =<T> (response: AxiosResponse) => response.data;

const request = {
    get:<T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => axios.post<T>(url).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url).then(responseBody),
    delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Activities = {
    list : ()=> request.get<Activity[]>('/activities')
}

const agent ={
    Activities
}

export default agent;