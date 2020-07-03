import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';
import { IlService } from '../service/IlService';
import PersonelConsumer from '../context';
import { Message } from 'primereact/message';
import validator from 'validator';
import { Button } from 'primereact/button';

const IletisimBilgileri = (props) => {
    const [iletisimBilgileri, setIsBilgisi] = useState({
        il: '0',
        ilce: "",
        SokakIsmi: "",
        CaddeIsmi: "",
        adres: "",
        telefon: "",
        Email: ""
        , ...props.iletisimBilgileri
    });

    const [formErrors, setFormErrors] = useState({});

    let growl = useRef(null);


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
            // validate form errors being empty
            Object.values(formErrors).forEach(val => {
                if (val.length > 0) isValid = false;
            });
        }
        return isValid;
    };

    const checkError = (key, value) => {
        let error = "";
        if (key === "il")
            error = value === "" ? "İl Alanını Doldurunuz" : "";
        else if (key === "ilce")
            error = value === "" ? "İlçe Alanını Doldurunuz" : "";
        else if (key === "CaddeIsmi")
            error = value === "" ? "Cadde Alanını Doldurunuz" : "";
        else if (key === "SokakIsmi")
            error = value === "" ? "Sokak  Alanını Doldurunuz" : "";
        else if (key === "Email")
            error = value === "" ? "Email Alanını Doldurunuz" : "";
        else if (key === "telefon")
            error = value === "" ? "Telefon Alanını Doldurunuz" : "";
        return error;

    };

    const cities = [
        { name: 'İstanbul', value: 'IST' },
        { name: 'Ankara', value: 'ANK' },
    ];

    const onChange = (e) => {

        const { key, value } = getKeyValue(e);

        setFormErrors({ ...formErrors, [key]: checkError(key, value) });

        setIsBilgisi({ ...iletisimBilgileri, [key]: value });

    };
    const checkErrors = async (user) => {

        let errors = { ...formErrors };

        Object.entries(user).forEach(([key, value]) => {
            errors[key] = checkError(key, value);
        });

        return errors;
    };

    const showError = (req) => {
        growl.current.show({ severity: 'error', summary: req, detail: '' });
    }

    const save = () => {

        checkErrors(iletisimBilgileri).then(formErrors => {
            if (formValid(formErrors)) {

                props.save(iletisimBilgileri);

            }
            else
                setFormErrors(formErrors);
        });
    };
    const prev = () => {
        props.prev({ ...props.isBilgisi });
    };
    const iller = Object.values({ ...props.ilList })

    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <Dropdown id="Il" name="il" value={iletisimBilgileri.il} style={{ width: '12em' }}
                        filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
                    <label htmlFor="Il">İl</label>
                </span>
                {formErrors.il && <Message severity="error" text={formErrors.il} />}
            </div>
            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <InputText
                        id="float-input"
                        type="text"
                        size={30}
                        name="ilce"
                        value={iletisimBilgileri.ilce}
                        onChange={onChange}
                    />
                    <label htmlFor="float-input">İlçe</label>
                </span>
                {formErrors.ilce && <Message severity="error" text={formErrors.ilce} />}


            </div>
            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <InputText
                        id="float-input"
                        type="text"
                        size={30}
                        name="CaddeIsmi"
                        value={iletisimBilgileri.CaddeIsmi}
                        onChange={onChange}
                    />
                    <label htmlFor="float-input">Cadde</label>
                </span>
                {formErrors.CaddeIsmi && <Message severity="error" text={formErrors.CaddeIsmi} />}


            </div>
            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <InputText
                        id="float-input"
                        type="text"
                        size={30}
                        name="SokakIsmi"
                        value={iletisimBilgileri.SokakIsmi}
                        onChange={onChange}
                    />
                    <label htmlFor="float-input">Sokak</label>
                </span>
                {formErrors.SokakIsmi && <Message severity="error" text={formErrors.SokakIsmi} />}


            </div>

            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <InputText
                        id="float-input"
                        type="email"
                        size={30}
                        name="Email"
                        value={iletisimBilgileri.Email}
                        onChange={onChange}
                    />
                    <label htmlFor="float-input">Email</label>
                </span>
                {formErrors.Email && <Message severity="error" text={formErrors.Email} />}


            </div>

            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <InputMask id="float-mask" mask="5999999999" name="telefon" value={iletisimBilgileri.telefon} onChange={(e) => this.setState({ telefon: e.value })} onClick={(e) => this.handleInputChange(e)} />
                    <label htmlFor="float-mask">599999999</label>
                </span>

            </div>
            <div className="p-col-12 p-md-4">
                <span className="p-float-label">
                    <InputTextarea
                        id="float-textarea"
                        name="adres"
                        value={iletisimBilgileri.adres}
                        onChange={(e) => this.handleInputChange(e)}
                        rows={5}
                        cols={30}
                    />
                    <label htmlFor="float-textarea">Adres</label>
                </span>
            </div>
            <div className="p-col-12">
                <Button label="Geri" style={{ marginLeft: 8 }} icon="pi pi-angle-left" onClick={prev} style={{ width: '10em' }} />
                <Button label="Kaydet" style={{ marginLeft: 8 }} icon="pi pi-check" className="p-button-success" onClick={save} style={{ width: '10em' }} />
            </div>
        </div>

    );
};

export default IletisimBilgileri
