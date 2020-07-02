import React, { Component } from 'react';

const personelContext = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "kimlik": return {
            ...state,
            kimlik: [{
                ad: action.payload.ad,
                soyad: action.payload.soyad,
                tcKimlik: action.payload.tc,
                kanGrubu: action.payload.kangrubu === null ? "" : action.payload.kangrubu.name,
                anneAdi: action.payload.anneadi,
                babaAdi: action.payload.babaadi,
                uyruk: action.payload.uyruk,
                cinsiyet: action.payload.cinsiyet,
                medeniDurum: action.payload.medeniDurum,
                kayitliOlduguIl: action.payload.il,
                kayitliOlduguIlce: action.payload.ilce,
                kayitliOlduguMahalleKoy: action.payload.mahallekoy,
                validate: action.payload.validate
            }],
            validate: action.payload.validate
        }
        case "ogrenim": return {
            ...state,            
            ogrenim: [{
                egitim: action.payload.egitim,
                IlkOgretimBilgisi: [{
                    okulAdi: action.payload.okulTipi ==="1" ? action.payload.okulAdi :{...state.ogrenim[0].IlkOgretimBilgisi[0].okulAdi},
                    mezuniyetYil: action.payload.okulTipi ==="1" ? action.payload.mezuniyetYil :{...state.ogrenim[0].IlkOgretimBilgisi[0].mezuniyetYil},
                    mezuniyetDurum: action.payload.okulTipi ==="1" ? action.payload.mezuniyetDurum :{...state.ogrenim[0].IlkOgretimBilgisi[0].mezuniyetDurum},
                    il: action.payload.okulTipi ==="1" ? action.payload.il :{...state.ogrenim[0].IlkOgretimBilgisi[0].il},
                    yurtDisi: action.payload.okulTipi ==="1" ? action.payload.yurtDisi :{...state.ogrenim[0].IlkOgretimBilgisi[0].yurtDisi},
                }],
                OrtaOgretimBilgisi: [{
                    okulAdi: action.payload.okulTipi ==="2" ? action.payload.okulAdi :{...state.ogrenim[0].OrtaOgretimBilgisi[0].okulAdi},
                    mezuniyetYil: action.payload.okulTipi ==="2" ? action.payload.mezuniyetYil :{...state.ogrenim[0].OrtaOgretimBilgisi[0].mezuniyetYil},
                    mezuniyetDurum: action.payload.okulTipi ==="2" ? action.payload.mezuniyetDurum :{...state.ogrenim[0].OrtaOgretimBilgisi[0].mezuniyetDurum},
                    il: action.payload.okulTipi ==="2" ? action.payload.il :{...state.ogrenim[0].OrtaOgretimBilgisi[0].il},
                    yurtDisi: action.payload.okulTipi ==="2" ? action.payload.yurtDisi :{...state.ogrenim[0].OrtaOgretimBilgisi[0].yurtDisi},
                }],
                LiseBilgisi: [{
                    okulAdi: action.payload.okulTipi ==="3" ? action.payload.okulAdi :{...state.ogrenim[0].LiseBilgisi[0].okulAdi},
                    mezuniyetYil: action.payload.okulTipi ==="3" ? action.payload.mezuniyetYil :{...state.ogrenim[0].LiseBilgisi[0].mezuniyetYil},
                    mezuniyetDurum: action.payload.okulTipi ==="3" ? action.payload.mezuniyetDurum :{...state.ogrenim[0].LiseBilgisi[0].mezuniyetDurum},
                    il: action.payload.okulTipi ==="3" ? action.payload.il :{...state.ogrenim[0].LiseBilgisi[0].il},
                    yurtDisi: action.payload.okulTipi ==="3" ? action.payload.yurtDisi :{...state.ogrenim[0].LiseBilgisi[0].yurtDisi},
                }],
                LisansBilgisi: [{
                    mezuniyetYil: action.payload.okulTipi ==="4" ? action.payload.mezuniyetYil :{...state.ogrenim[0].LisansBilgisi[0].mezuniyetYil},
                    mezuniyetDurum: action.payload.okulTipi ==="4" ? action.payload.mezuniyetDurum :{...state.ogrenim[0].LisansBilgisi[0].mezuniyetDurum},
                    universite: action.payload.okulTipi ==="4" ? action.payload.universite :{...state.ogrenim[0].LisansBilgisi[0].universite},
                    bastarih: action.payload.okulTipi ==="4" ? action.payload.bastarih :{...state.ogrenim[0].LisansBilgisi[0].bastarih},
                    sontarih: action.payload.okulTipi ==="4" ? action.payload.sontarih :{...state.ogrenim[0].LisansBilgisi[0].sontarih},
                    notSistemi: action.payload.okulTipi ==="4" ? action.payload.notSistemi :{...state.ogrenim[0].LisansBilgisi[0].notSistemi},
                    fakulte:action.payload.okulTipi ==="4" ? action.payload.fakulte :{...state.ogrenim[0].LisansBilgisi[0].fakulte},
                    bolum:action.payload.okulTipi ==="4" ? action.payload.bolum :{...state.ogrenim[0].LisansBilgisi[0].bolum},
                    egitimDili:action.payload.okulTipi ==="4" ? action.payload.egitimDili :{...state.ogrenim[0].LisansBilgisi[0].egitimDili}
                }],
                YLisansBilgisi: [{
                    mezuniyetYil: action.payload.okulTipi ==="5" ? action.payload.mezuniyetYil :{...state.ogrenim[0].YLisansBilgisi[0].mezuniyetYil},
                    mezuniyetDurum: action.payload.okulTipi ==="5" ? action.payload.mezuniyetDurum :{...state.ogrenim[0].YLisansBilgisi[0].mezuniyetDurum},
                    universite: action.payload.okulTipi ==="5" ? action.payload.universite :{...state.ogrenim[0].YLisansBilgisi[0].universite},
                    bastarih: action.payload.okulTipi ==="5" ? action.payload.bastarih :{...state.ogrenim[0].YLisansBilgisi[0].bastarih},
                    sontarih: action.payload.okulTipi ==="5" ? action.payload.sontarih :{...state.ogrenim[0].YLisansBilgisi[0].sontarih},
                    notSistemi: action.payload.okulTipi ==="5" ? action.payload.notSistemi :{...state.ogrenim[0].YLisansBilgisi[0].notSistemi},
                    fakulte:action.payload.okulTipi ==="5" ? action.payload.fakulte :{...state.ogrenim[0].YLisansBilgisi[0].fakulte},
                    bolum:action.payload.okulTipi ==="5" ? action.payload.bolum :{...state.ogrenim[0].YLisansBilgisi[0].bolum},
                    egitimDili:action.payload.okulTipi ==="5" ? action.payload.egitimDili :{...state.ogrenim[0].YLisansBilgisi[0].egitimDili}
                }],
                DoktoraBilgisi: [{
                    mezuniyetYil: action.payload.okulTipi ==="6" ? action.payload.mezuniyetYil :{...state.ogrenim[0].DoktoraBilgisi[0].mezuniyetYil},
                    mezuniyetDurum: action.payload.okulTipi ==="6" ? action.payload.mezuniyetDurum :{...state.ogrenim[0].DoktoraBilgisi[0].mezuniyetDurum},
                    universite: action.payload.okulTipi ==="6" ? action.payload.universite :{...state.ogrenim[0].DoktoraBilgisi[0].universite},
                    bastarih: action.payload.okulTipi ==="6" ? action.payload.bastarih :{...state.ogrenim[0].DoktoraBilgisi[0].bastarih},
                    sontarih: action.payload.okulTipi ==="6" ? action.payload.sontarih :{...state.ogrenim[0].DoktoraBilgisi[0].sontarih},
                    notSistemi: action.payload.okulTipi ==="6" ? action.payload.notSistemi :{...state.ogrenim[0].DoktoraBilgisi[0].notSistemi},
                    fakulte:action.payload.okulTipi ==="6" ? action.payload.fakulte :{...state.ogrenim[0].DoktoraBilgisi[0].fakulte},
                    bolum:action.payload.okulTipi ==="6" ? action.payload.bolum :{...state.ogrenim[0].DoktoraBilgisi[0].bolum},
                    egitimDili:action.payload.okulTipi ==="6" ? action.payload.egitimDili :{...state.ogrenim[0].DoktoraBilgisi[0].egitimDili}
                }],
                okulTipi: "0"
    
            }],
            validate: action.payload.validate
        }       
        case "is": return {
            ...state,
            is: [{
                unvan: action.payload.unvan,
                sirket: action.payload.sirket,
                il: action.payload.il,
                baglioldugumudurluk: action.payload.baglioldugumudurluk,
                baglioldugumudur: action.payload.baglioldugumudur,
                kidem: action.payload.kıdem,
            }],
            validate: action.payload.validate
        }
        case "iletisim": return {
            ...state,
            iletisim: [{
                il: action.payload.il,
                ilce: action.payload.ilce,
                SokakIsmi: action.payload.SokakIsmi,
                CaddeIsmi: action.payload.CaddeIsmi,
                adres: action.payload.adres,
                telefon: action.payload.telefon,
                Email: action.payload.Email,
            }], 
            validate: action.payload.validate
        }
        case "validate": return {
            ...state,           
            validate: action.payload
        }
        default: return {
            ...state
        }
    }
}
export class PersonelProvider extends Component {
    state = {
        kimlik: [{
            ad: "",
            soyad: "",
            tcKimlik: "",
            kanGrubu: "",
            anneAdi: "",
            babaAdi: "",
            uyruk: "",
            cinsiyet: "",
            medeniDurum: "",
            kayitliOlduguIl: "",
            kayitliOlduguIlce: "",
            kayitliOlduguMahalleKoy: ""
        }],
        ogrenim: [{
            egitim: '0',
            IlkOgretimBilgisi: [{
                okulAdi: "",
                mezuniyetYil: "",
                mezuniyetDurum: '1',
                il: '6',
                yurtDisi: false,
            }],
            OrtaOgretimBilgisi: [{
                okulAdi: "",
                mezuniyetYil: "",
                mezuniyetDurum: '1',
                il: '6',
                yurtDisi: false,
            }],
            LiseBilgisi: [{
                okulAdi: "",
                mezuniyetYil: "",
                mezuniyetDurum: '1',
                il: '6',
                yurtDisi: false,
            }],
            LisansBilgisi: [{
                mezuniyetYil: "",
                mezuniyetDurum: '0',
                uniList: [],
                notSistemleri: [],
                universite: '0',
                bastarih: "",
                sontarih: "",
                notSistemi: "0",
            }],
            YLisansBilgisi: [{
                mezuniyetYil: "",
                mezuniyetDurum: '0',
                uniList: [],
                notSistemleri: [],
                universite: '0',
                bastarih: "",
                sontarih: "",
                notSistemi: "0",
            }],
            DoktoraBilgisi: [{
                mezuniyetYil: "",
                mezuniyetDurum: '0',
                uniList: [],
                notSistemleri: [],
                universite: '0',
                bastarih: "",
                sontarih: "",
                notSistemi: "0",
            }],
            okulTipi: "0"

        }],
        validate: false,

        is: [{
            unvan: "",
            sirket: "",
            il: '6',
            baglioldugumudurluk: "",
            baglioldugumudur: "",
            kidem: "",
        }],   
        
        iletisim: [{
            il: '0',
            ilce: "",
            SokakIsmi: "",
            CaddeIsmi: "",
            adres: "",
            telefon: "",
            Email: "",
        }], 
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }

    };
    render() {
        return (
            <personelContext.Provider value={this.state}>
                {this.props.children}
            </personelContext.Provider>
        );
    }
}

const personelConsumer = personelContext.Consumer;
export default personelConsumer;