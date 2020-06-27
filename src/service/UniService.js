import axios from 'axios';

export class UniService {

    getUniList() {
        return axios.get('assets/demo/data/unibolum.json')
            .then(res => res.data.data);
    }
    
   
}