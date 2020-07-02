import axios from 'axios';
const url = 'http://172.16.6.204:8000/';

export class PerSonelService {
   

    getPersonel() {
        return axios.get(url + 'personel/')
            .then(res => res.data.data);
    }

    getPersonelById(id) {
        return axios.get(url + 'personel/detail/'+ id )
            .then(res => res.data.data);
    }

    getAdress() {
        return axios.get(url + 'address/' )
            .then(res => res.data.data);
    }

    getAdressById() {
        return axios.get(url + 'personel/detail/'+ id )
            .then(res => res.data.data);
    }
    getEducation() {
        return axios.get(url + 'education/' )
            .then(res => res.data.data);
    }

    getEducationById() {
        return axios.get(url + 'education/detail/'+ id )
            .then(res => res.data.data);
    }
    
    
   
}