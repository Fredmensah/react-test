import API from '../../config/apis.json';

const {BASE_URL, resources} = API;

export const usersApi = async () => {
    try {
        const response = await fetch(`${BASE_URL}/${resources.users}`);

        if (response && response.ok && response.status === 200) {
            return response.json();
        }
    } catch (error) {
        throw new Error("OOPS. Something wrong fetching users");
    }
}