import Axios from 'axios';
import { Utils } from '../common/Utils';

// could set baseUrl to production or development url
const baseUrl = 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/';

// users
export const UserApiService = {
    async getUsers(filter){
        try {
            const response = await Axios.get(baseUrl + 'users' + Utils.getParameters(filter))
            return  response.data
        } catch (error) {
            return error
        }
    }
}

