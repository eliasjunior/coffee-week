import Axios from 'axios';
import { Utils } from '../common/Utils';

const baseUrl = 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/';

// users
export const UserApiService = {
    getUsers(filter){
        return Axios.get(baseUrl + 'users' + Utils.getParameters(filter))
            .then(response => response.data )
            .catch(reason => reason);
    }
}

