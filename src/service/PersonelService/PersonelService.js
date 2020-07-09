import axios from 'axios';
const url = 'http://172.16.6.80:8000/';
// const url = 'http://192.168.1.35:8000';


export class PersonelService {


    getPersonelSirketKimlikId() {
        const kimlik = {
        }
        const root = []
        return axios.get(url + 'kimlik/')
            .then(data =>

                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return axios.get(url + 'isbilgisi/personel/detail/' + kimlikValue["id"])
                        .then(res => (kimlik[kimlikKey] = kimlikValue, kimlik[kimlikKey].is = res.data))
                        .then(res => root.push(kimlik[kimlikKey]))
                })

            )
            .then(data => root);
    }  

    postPersonel(personel) {
        return axios.post(url + 'kimlik/', { personel })
            .then(res =>
                res.data
            ).catch(error =>
                error

            );
    }


    deletePersonel(id) {
        return axios.delete(url + 'kimlik/detail/'  + id)
    }

    getiletisimKimId(id) {
        return axios.get(url + 'iletisim/personel/detail/' + id)
            .then(res => res.data);
    }

    getPersonelKimId(id) {
        return axios.get(url + 'kimlik/personel/detail/' + id)
            .then(res => res.data);
    }

    


}