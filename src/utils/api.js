import axios from "axios";

// * Get Api - Public Api
export const getRequest = async (url) => {
    try {
        const res = await axios.get(url).then((response) => response.data);
        return res;
    } catch (err) {
        return err;
    }
};