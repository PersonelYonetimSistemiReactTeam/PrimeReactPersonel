import axios from 'axios';
const url = 'http://172.16.6.80:8000/';

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
            .then(data => root)
        // .then(data => root.concat(kimlik))
    }

    getPersonel(id) {
        const personel = {
            kimlik: {},
            egitim: {
                ilkOgretimBilgisi: {},
                ortaOgretimBilgisi: {},
                liseBilgisi: {},
                lisansBilgisi: {},
                ylisansBilgisi: {},
                doktoraBilgisi: {}
            },
            is: {},
            iletisim: {}
        }
        return axios.get(url + 'kimlik/detail/' + id)
            .then(res => personel.kimlik = res.data)
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                return axios.get(url + 'isbilgisi/personel/detail/' + kimlikValue["id"])
                        .then(is => personel.is = is.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return  axios.get(url + 'iletisim/personel/detail/' + kimlikValue["id"])
                        .then(iletisim => personel.iletisim = iletisim.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return  axios.get(url + 'ilkogretim/personel/detail/' + kimlikValue["id"])
                        .then(ilkogretim => personel.egitim.ilkOgretimBilgisi = ilkogretim.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return  axios.get(url + 'ortaogretim/personel/detail/' + kimlikValue["id"])
                        .then(ortaogretim => personel.egitim.ortaOgretimBilgisi = ortaogretim.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return   axios.get(url + 'lise/personel/detail/' + kimlikValue["id"])
                        .then(lise => personel.egitim.liseBilgisi = lise.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return  axios.get(url + 'lisans/personel/detail/' + kimlikValue["id"])
                        .then(lisans => personel.egitim.lisansBilgisi = lisans.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return axios.get(url + 'yukseklisans/personel/detail/' + kimlikValue["id"])
                        .then(yukseklisans => personel.egitim.ylisansBilgisi = yukseklisans.data)
                }))
            .then(data =>
                Object.entries(data.data).forEach(([kimlikKey, kimlikValue]) => {
                    return  axios.get(url + 'doktora/personel/detail/' + kimlikValue["id"])
                        .then(doktora => personel.egitim.doktoraBilgisi = doktora.data)
                }))
            .then(data => personel)

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
    return axios.delete(url + 'kimlik/detail/' + id)
        .then(res =>
            res.data
        ).catch(error =>
            error

        );
}


}