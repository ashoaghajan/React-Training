import axios from 'axios';

export const get_data = async(url: string) => {
    const { data } = await axios.get(url);
    return data
}