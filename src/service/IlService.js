import axios from 'axios';

export class IlService {

    getIller() {
        return axios.get('assets/demo/data/il.json')
            .then(res => res.data.data);
            
    }
}