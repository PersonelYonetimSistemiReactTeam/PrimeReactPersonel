import axios from 'axios';
const url = 'http://192.168.1.35:8000/';

export class PersonelService {

    getKimlik() {
        return axios.get(url + 'kimlik/')
            .then(res => res.data);
    }
    getiletisim() {
        return axios.get(url + 'iletisim/')
            .then(res => res.data);
    }
    getisbilgisi() {
        return axios.get(url + 'isbilgisi/')
            .then(res => res.data);
    }
    getilkogretim() {
        return axios.get(url + 'ilkogretim/')
            .then(res => res.data);
    }
    getortaogretim() {
        return axios.get(url + 'ortaogretim/')
            .then(res => res.data);
    }
    getlise() {
        return axios.get(url + 'lise/')
            .then(res => res.data);
    }

    getlisans() {
        return axios.get(url + 'lisans/')
            .then(res => res.data);
    }
    getyukseklisans() {
        return axios.get(url + 'yukseklisans/')
            .then(res => res.data);
    }
    getdoktora() {
        return axios.get(url + 'doktora/')
            .then(res => res.data);
    }

    getKimlikId(id) {
        return axios.get(url + 'kimlik/detail/' + id)
            .then(res => res.data);
    }
    getiletisimId(id) {
        return axios.get(url + 'iletisim/detail/' + id)
            .then(res => res.data);
    }
    getisbilgisiId(id) {
       return axios.get(url + 'isbilgisi/detail/' + id)
            .then(res => res.data);
    }
    getilkogretimId(id) {
        return axios.get(url + 'ilkogretim/detail/' + id)
            .then(res => res.data);
    }
    getortaogretimId(id) {
        return axios.get(url + 'ortaogretim/detail/' + id)
            .then(res => res.data);
    }
    getliseId(id) {
        return axios.get(url + 'lise/detail/' + id)
            .then(res => res.data);
    }

    getlisansId(id) {
        return axios.get(url + 'lisans/detail/' + id)
            .then(res => res.data);
    }
    getyukseklisansId(id) {
        return axios.get(url + 'yukseklisans/detail/' + id)
            .then(res => res.data);
    }
    getdoktoraId(id) {
        return axios.get(url + 'doktora/detail/' + id)
            .then(res => res.data);
    }

    getPersonelById(id) {
        return axios.get(url + 'kimlik/detail/' + id)
            .then(res => res.data);
    }

    getPersonelListesi() {
        const personel = {
            kimlik: {
            }
        }
        const islem = false;
        return axios.get(url + 'kimlik/')
            .then(res => personel.kimlik = res.data)
            .then(data =>
                Object.entries(data).forEach(([kimlikKey, kimlikValue]) => {
                    axios.get(url + 'isbilgisi/')
                        .then(is => Object.entries(is.data).forEach(([isKey, isValue]) => {
                            if (kimlikValue["id"] === isValue["kimlik_bilgisi_id"]) {
                                axios.get(url + 'isbilgisi/detail/' + isValue["id"])
                                    .then(res => personel.kimlik[kimlikKey].is = res.data);
                            }
                        }))

                })
            )
           .catch(console.log("İs"))


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
        return this.getKimlikId(id)
            .then(kimlik => Object.entries(kimlik.data).forEach(([kimlikKey, kimlikValue]) => {
                personel.kimlik = kimlik
                this.getiletisim()
                    .then(iletisim => Object.entries(iletisim.data).forEach(([iletisimKey, iletisimValue]) => {
                        if (kimlikValue["id"] === iletisimValue["kimlik_bilgisi_id"]) {
                            personel.iletisim = this.getiletisimId(iletisimValue["id"]);
                        }
                    }));
                this.getisbilgisi()
                    .then(isbilgisi => Object.entries(isbilgisi.data).forEach(([isbilgisiKey, isbilgisiValue]) => {
                        if (kimlikValue["id"] === isbilgisiValue["kimlik_bilgisi_id"]) {
                            personel.is = this.getisbilgisiId(isbilgisiValue["id"]);
                        }
                    }));
                this.getilkogretim()
                    .then(ilkogretim => Object.entries(ilkogretim.data).forEach(([ilkogretimKey, ilkogretimValue]) => {
                        if (kimlikValue["id"] === ilkogretimValue["kimlik_bilgisi_id"]) {
                            personel.egitim.ilkOgretimBilgisi = this.getilkogretimId(ilkogretimValue["id"]);
                        }
                    }));
                this.getortaogretim()
                    .then(ortaogretim => Object.entries(ortaogretim.data).forEach(([ortaogretimKey, ortaogretimValue]) => {
                        if (kimlikValue["id"] === ortaogretimValue["kimlik_bilgisi_id"]) {
                            personel.egitim.ortaOgretimBilgisi = this.getortaogretimId(ortaogretimValue["id"]);
                        }
                    }));
                this.getlise()
                    .then(lise => Object.entries(lise.data).forEach(([liseKey, liseValue]) => {
                        if (kimlikValue["id"] === liseValue["kimlik_bilgisi_id"]) {
                            personel.egitim.liseBilgisi = this.getliseId(liseValue["id"]);
                        }
                    }));
                this.getlisans()
                    .then(lisans => Object.entries(lisans.data).forEach(([lisansKey, lisansValue]) => {
                        if (lisansValue["id"] === lisansValue["kimlik_bilgisi_id"]) {
                            personel.egitim.lisansBilgisi = this.getlisansId(lisansValue["id"]);
                        }
                    }));
                this.getyukseklisans()
                    .then(yukseklisans => Object.entries(yukseklisans.data).forEach(([yukseklisansKey, yukseklisansValue]) => {
                        if (kimlikValue["id"] === yukseklisansValue["kimlik_bilgisi_id"]) {
                            personel.egitim.ylisansBilgisi = this.getyukseklisansId(yukseklisansValue["id"]);
                        }
                    }));
                this.getdoktora()
                    .then(doktora => Object.entries(doktora.data).forEach(([iletisimKey, doktoraValue]) => {
                        if (kimlikValue["id"] === doktoraValue["kimlik_bilgisi_id"]) {
                            personel.egitim.doktoraBilgisi = this.getdoktoraId(doktoraValue["id"]);
                        }
                    }));


            }));


    }


    postPersonel(personel) {
        return axios.post(url + 'kimlik/', { personel })
            .then(res =>
                res.data
            ).catch(error =>
                error

            );
    }



}