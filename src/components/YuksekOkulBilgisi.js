import React, { useState,useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { UniService } from '../service/UniService';
import '../layout/sass/personelKayit.scss';
import { Calendar } from 'primereact/calendar';



const YuksekOkulBilgisi = (props) => {
    const [yuksekOkulBilgisi, setYuksekOkul] = useState({
        mezuniyetYil: null,
        mezuniyetDurum: '0',
        universite: '0',
        bastarih: null,
        sontarih: null,
        notSistemi: "0",
        notortalamasi:"",
        fakulte: "",
        bolum: "",
        egitimDili: ""
        , ...props.yuksekOkulBilgisi
    });

    const mezuniyetDurumlari = [
        { label: 'Seçiniz', value: '0' },
        { label: 'Mezun', value: '1' },
        { label: 'Devam', value: '2' },
        { label: 'Terk', value: '3' }
    ];
    const notSistemleri = [
        { label: 'Seçiniz', value: '0' },
        { label: '4', value: '1' },
        { label: '5', value: '2' },
        { label: '10', value: '3' },
        { label: '100', value: '3' }
    ];
   
    const uniList = Object.entries({...props.uniList})

    const getKeyValue = (e) => {
        if (e.target) {
            if (e.target.type) {
                if (e.target.type === "checkbox")
                    return { key: e.target.name, value: e.target.checked };
                else
                    return { key: e.target.name, value: e.target.value };
            } else
                return { key: e.target.name, value: e.target.value };
        }
        return { key: null, value: null };
    };
    const tr = {
        monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"]
    };

    const onChange = (e) => {

        const { key, value } = getKeyValue(e);
        setYuksekOkul({ ...yuksekOkulBilgisi, [key]: value });

    };
   
    return (
        <div className="p-grid">
            <div className="p-col-12 p-md-12">
                <div className="okulBilgisi ">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Üniversite</h3>
                            {console.log(uniList)}
                            <Dropdown name="universite" value={yuksekOkulBilgisi.universite} key={uniList.value} options={uniList} onChange={onChange} style={{ width: '12em' }}
                                filter={true} filterPlaceholder="Üniversite" filterBy="label,value" showClear={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Fakülte</h3>
                            <span className="p-float-label">
                                <InputText id="Fakülte" name="fakulte" type="text" size={250} value={yuksekOkulBilgisi.fakulte} onChange={onChange} />
                                <label htmlFor="float-input">Fakülte</label>
                            </span>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Bölüm</h3>
                            <span className="p-float-label">
                                <InputText id="Bolum" name="bolum" type="text" size={250} value={yuksekOkulBilgisi.bolum} onChange={onChange} />
                                <label htmlFor="float-input">Bölüm</label>
                            </span>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Eğitim Dili</h3>
                            <span className="p-float-label">
                                <InputText id="EgitimDili" name="egitimDili" type="text" size={250} value={yuksekOkulBilgisi.egitimDili} onChange={onChange} />
                                <label htmlFor="float-input">Eğitim Dili</label>
                            </span>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Başlangıç Tarihi</h3>
                            <Calendar name ="bastarih" value={yuksekOkulBilgisi.bastarih} onChange={onChange} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="1990:2030" locale={tr} />

                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Mezuniyet Durumu</h3>
                            <Dropdown name="mezuniyetDurum" value={yuksekOkulBilgisi.mezuniyetDurum} options={mezuniyetDurumlari} onChange={onChange} style={{ width: '12em' }}
                            />
                        </div>
                        <div className={yuksekOkulBilgisi.mezuniyetDurum === "1" ? "p-col-12 p-md-4" : "p-col-12 p-md-4 divDisplayNone"} >
                            <h3>Mezuniyet Tarihi</h3>
                            <Calendar name="sontarih" value={yuksekOkulBilgisi.sontarih} onChange={onChange} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="1990:2030" locale={tr} />

                        </div>
                        <div className={yuksekOkulBilgisi.mezuniyetDurum === "1" ? "p-col-12 p-md-4" : "p-col-12 p-md-4 divDisplayNone"}>
                            <h3>Not Ortalaması</h3>
                            <span className="p-float-label">
                                <InputText id="NotOrtalamasi" name="notortalamasi" type="number" value={yuksekOkulBilgisi.notortalamasi} onChange={onChange} />
                                <label htmlFor="float-input">Not Ortalaması</label>
                            </span>
                        </div>
                        <div className={yuksekOkulBilgisi.mezuniyetDurum === "1" ? "p-col-12 p-md-4" : "p-col-12 p-md-4 divDisplayNone"}>
                            <h3>Not Sistemi</h3>
                            <Dropdown name ="notSistemi" value={yuksekOkulBilgisi.notSistemi} options={notSistemleri} onChange={onChange} style={{ width: '12em' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default YuksekOkulBilgisi

