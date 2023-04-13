import API from '../../config/apis.json';

export const usersApi = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (response && response.ok && response.status === 200) {
            return response.json();
        } else {
            console.log(response);
            //throw new Error(response);
        }
    } catch (error) {
        throw new Error("Let chech error type first");
    }
}