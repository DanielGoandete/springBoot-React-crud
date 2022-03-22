import axios from "axios";

const USER_REST_API_URL = 'http://localhost:8080/api/users';

class UserService{

    getUsers(){
       return axios.get(USER_REST_API_URL);
    }

    createUser(userData){
        return axios.post(USER_REST_API_URL, userData );    
    }

    getUserById(userID){
        return axios.get(USER_REST_API_URL +'/'+ userID);
    }

    updateUser(user,userID){
        return axios.put(USER_REST_API_URL+'/'+userID,user);
    }

    deleteUserById(userID){
        return axios.delete(USER_REST_API_URL +'/'+ userID);
    }
}

export default new UserService()