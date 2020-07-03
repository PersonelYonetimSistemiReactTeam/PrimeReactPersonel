import React, { Component, useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import validator from 'validator';
import { IlService } from '../service/IlService';
import '../layout/sass/personelKayit.scss';
import PersonelConsumer from '../context';
import { Growl } from 'primereact/growl';


const IsBilgileri = (props) => {
  const [IsBilgisi, setIsBilgisi] = useState({
    unvan: "",
    sirket: "",
    il: '6',
    iller: [],
    baglioldugumudurluk: "",
    baglioldugumudur: "",
    kidem: ""

  });

  const [formErrors, setFormErrors] = useState({});
  
  let growl = useRef(null);

  const sirketlist = [
    { name: 'Limak Teknoloji', code: 'LT' },
    { name: 'Limak Enerji', code: 'LE' },
    { name: 'Limak Çimento', code: 'LC' },
    { name: 'Limak İnşaat', code: 'LI' },
    { name: 'Limak Turizm', code: 'LI' },
    { name: 'Limak Gıda', code: 'LI' },
    { name: 'Limak Liman', code: 'LI' }
  ];

  const getKeyValue = (e) => 
  {
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

    if (key === "unvan")
      error = value === "" ? "unvan Alanını Doldurunuz" : "";
    else if (key === "baglioldugumudurluk")
      error = value === "" ? "Bağlı olduğu müdürlük Alanını Doldurunuz" : "";
      else if (key === "baglioldugumudurluk")
      error = value === "" ? "Müdürlük Alanını Doldurunuz" : "";
      else if (key === "kidem")
      error = value === "" ? "Kıdem Alanını Doldurunuz" : "";
    return error;
  };

  const onChange = (e) => {

    const { key, value } = getKeyValue(e);

    setFormErrors({ ...formErrors, [key]: checkError(key, value) });

    setIsBilgisi({ ...IsBilgisi, [key]: value });

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

  const next = () => {

    checkErrors(IsBilgisi).then(formErrors => {
      if (formValid(formErrors)) {

        props.next(IsBilgisi);

      }
      else
        setFormErrors(formErrors);
    });
  };

  return (
    <div>
    <Growl ref={growl} />
    <div className="p-grid p-fluid">
      <div className="p-col-12 p-md-4">
        <h3>Ünvan*</h3>
        <span className="p-float-label">
          <InputText name="unvan" type="text" size={30} value={IsBilgisi.unvan} className={formErrors.ad ? "error" : ""} onChange={onChange}/>
          <label htmlFor="float-input">Ünvan</label>
        </span>
        <div className={IsBilgisi.reqClassUnvan}>
          <Message severity="error" text="Unvan alanı boş geçilemez!" />
        </div>
        <h3>Bağlı Olduğu Müdürlük*</h3>
        <span className="p-float-label">
          <InputText name="baglioldugumudurluk" type="text" size={30} className={formErrors.ad ? "error" : ""} onChange={onChange} />
          <label htmlFor="float-input">Bağlı Olduğu Müdürlük</label>
        </span>
        <div className={IsBilgisi.reqClassMudurluk} >
          <Message severity="error" text="Bağlı olduğu müdürlük alanı boş geçilemez!" />
        </div>
        <h3>Bağlı Olduğu Müdür/Amir*</h3>
        <span className="p-float-label">
          <InputText name="baglioldugumudur" type="text" size={30} value={IsBilgisi.baglioldugumudur} className={formErrors.ad ? "error" : ""} onChange={onChange}/>
          <label htmlFor="float-input">Bağlı Olduğu Müdür/Amir</label>
        </span>
        <div className={IsBilgisi.reqClassMudur} >
          <Message severity="error" text="Bağlı olduğu müdür/amir alanı boş geçilemez!" />
        </div>
        <h3>Kıdem*</h3>
        <span className="p-float-label">
          <InputText name="kidem" type="text" size={30} value={IsBilgisi.kidem} className={formErrors.ad ? "error" : ""} onChange={onChange} />
          <label htmlFor="float-input">Kıdem</label>
        </span>
        <div className={IsBilgisi.reqClassKidem} >
          <Message severity="error" text="Kıdem alanı boş geçilemez!" />
        </div>
        <h3>Şirket*</h3>
        <div className="p-col-12 p-md-12">
          <Dropdown id="Sirket" value={IsBilgisi.sirket} options={sirketlist}  optionLabel="name" style={{ width: '12em' }} />
        </div>
        <div className="p-col-12 p-md-">
          <h3>Çalıştığı İl</h3>
          <Dropdown id="Il" value={IsBilgisi.il}    style={{ width: '12em' }}
            filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default IsBilgileri