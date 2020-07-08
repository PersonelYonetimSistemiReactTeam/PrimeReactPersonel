import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import '../layout/sass/personelKayit.scss';
import OkulBilgisi from './OkulBilgisi';
import YuksekOkulBilgisi from './YuksekOkulBilgisi'
import { UniService } from '../service/UniService';
import { Button } from 'primereact/button';
import { IlService } from '../service/IlService';



const EgitimBilgileri = (props) => {

    const [universiteList, setUniList] = useState({});
    const [ilList, setIlList] = useState({});


    const [egitim, setEgitim] = useState({
        egitimSeviyesi: "",
        ilkOgretimBilgisi: { egitimSeviyesi: "İlkOgretim" },
        ortaOgretimBilgisi: { egitimSeviyesi: "OrtaOgretim" },
        liseBilgisi: { egitimSeviyesi: "Lise" },
        lisansBilgisi: { egitimSeviyesi: "Lisans" },
        ylisansBilgisi: { egitimSeviyesi: "YLisans" },
        doktoraBilgisi: { egitimSeviyesi: "Doktora" },...props.egitim
    });
    const [formErrors, setFormErrors] = useState({});

    const egitimseviyeleri = [
        { name: 'İlköğretim', code: "1" },
        { name: 'Orta Öğretim', code: '2' },
        { name: 'Lise', code: '3' },
        { name: 'Üniversite', code: '4' },
        { name: 'Yüksek Lisans ', code: '5' },
        { name: 'Doktora', code: '6' }
    ];

    const ilService = new IlService();
    const unilistService = new UniService();
    
    useEffect(() => {    
        
        
        ilService.getIller().then(
            data => setIlList(data));

        unilistService.getUniList().then(
            data => setUniList(data));

  }, []);

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

    const formValid = (formErrors) => {

        let isValid = true;

        if (formErrors !== null) {
            Object.values(formErrors).forEach(val => {
                if (val.length > 0) isValid = false;
            });
        }
        return isValid;
    };

    const checkError = (key, value) => {
        let error = "";
        if (key === "ad")
            error = value === "" ? "Ad Alanını Doldurunuz" : "";
        return error;
    };

    const onChange = (e) => {

        const { key, value } = getKeyValue(e);

        setFormErrors({ ...formErrors, [key]: checkError(key, value) });

        setEgitim({ ...egitim, [key]: value });

    };

    const checkErrors = async (user) => {

        let errors = { ...formErrors };

        Object.entries(user).forEach(([key, value]) => {
            errors[key] = checkError(key, value);
        });

        return errors;
    };



    const next = () => {

        checkErrors(egitim).then(formErrors => {
            if (formValid(formErrors)) {

                props.next(egitim);

            }
            else
                setFormErrors(formErrors);
        });
    };

    const prev = () => {
        props.prev(egitim);
    };
    


    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <Dropdown id="egitimSeviyesi" name="egitimSeviyesi" value={egitim.egitimSeviyesi} options={egitimseviyeleri} onChange={onChange}
                        optionLabel="name" optionValue="code" />
                    <label htmlFor="egitimSeviyesi">Eğitim Seviyesi</label>
                </span>
            </div>

            <div className="p-col-12 p-md-12 card">
                {Number(egitim.egitimSeviyesi) > 0 &&
                    <div className="okulBilgisi">
                        <h2>İlköğretim Bilgisi</h2>
                        <OkulBilgisi okulBilgisi={egitim.ilkOgretimBilgisi} ilList={ilList} onChange={(ilkokul) => {
              setEgitim({...egitim, ilkOgretimBilgisi: ilkokul});
            }}/>
                    </div>}
                {Number(egitim.egitimSeviyesi) > 1 &&
                    <div className="okulBilgisi">
                        <h2> Orta Öğretim Bilgisi</h2>
                        <OkulBilgisi okulBilgisi={egitim.ortaOgretimBilgisi} ilList={ilList} onChange={(orta) => {
              setEgitim({...egitim, ortaOgretimBilgisi: orta});
            }}/>
                    </div>}
                {Number(egitim.egitimSeviyesi) > 2 &&
                    <div className="okulBilgisi" >
                        <h2> Lise Bilgisi</h2>
                        <OkulBilgisi okulBilgisi={egitim.liseBilgisi} ilList={ilList} onChange={(lise) => {
              setEgitim({...egitim, liseBilgisi: lise});
            }}/>
                    </div>}
                {Number(egitim.egitimSeviyesi) > 3 &&
                    <div className="okulBilgisi" >
                        <h2>Üniversite Bilgisi</h2>
                        <YuksekOkulBilgisi yuksekOkulBilgisi={egitim.lisansBilgisi} uniList={universiteList} onChange={(lisans) => {
              setEgitim({...egitim, lisansBilgisi: lisans});
            }}/>
                    </div>}
                {Number(egitim.egitimSeviyesi) > 4 &&
                    <div className="okulBilgisi">
                        <h2>Yüksek Lisans Bilgisi</h2>
                        <YuksekOkulBilgisi yuksekOkulBilgisi={egitim.yLisansBilgisi} uniList={universiteList} onChange={(ylisans) => {
              setEgitim({...egitim, yLisansBilgisi: ylisans});
            }}/>
                    </div>
                }
                {Number(egitim.egitimSeviyesi) > 5 &&
                    <div className="okulBilgisi">
                        <h2>Doktora Bilgisi</h2>
                        <YuksekOkulBilgisi YuksekOkulBilgisi={egitim.doktoraBilgisi} uniList={universiteList} onChange={(doktora) => {
              setEgitim({...egitim, doktoraBilgisi: doktora});
            }}/>
                    </div>
                }
            </div>
            <div className="p-col-12">
                <Button label="Geri"  icon="pi pi-angle-left" onClick={prev} style={{ width: '10em' }} />

                <Button label="İleri"  icon="pi pi-angle-right"  iconPos="right"  onClick={next} style={{ width: '10em',marginLeft: 8 }} />
            </div>
        </div >

    )



};
export default EgitimBilgileri

