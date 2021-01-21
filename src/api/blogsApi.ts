import axios from 'axios';

let signal: any = null;

export const get_data = async(url: string) => {
    signal = axios.CancelToken.source();
    const { data } = await axios.get(url, { cancelToken: signal.token });
    return data
}

export const post_data = async(url: string, body: any) => {
    const { data } = await axios.post(url, body);
    return data
}

export const cancel_req = () => {
    signal.cancel("axios request cancelled");
}