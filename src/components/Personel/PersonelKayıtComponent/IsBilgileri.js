import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import '../../../layout/sass/personelKayit.scss';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';


const IsBilgileri = (props) => {
  const [isBilgisi, setIsBilgisi] = useState({
    unvan: "",
    sirket: "",
    il: "",
    baglioldugumudurluk: "",
    baglioldugumudur: "",
    kidem: ""
    , ...props.isBilgisi
  });

  const [formErrors, setFormErrors] = useState({});

  let growl = useRef(null);

  const sirketlist = [
    { name: 'Limak Teknoloji', code: 'Limak Teknoloji' },
    { name: 'Limak Enerji', code: 'Limak Enerji' },
    { name: 'Limak Çimento', code: 'Limak Çimento' },
    { name: 'Limak İnşaat', code: 'Limak İnşaat' },
    { name: 'Limak Turizm', code: 'Limak Turizm' },
    { name: 'Limak Gıda', code: 'Limak Gıda' },
    { name: 'Limak Liman', code: 'Limak Liman' }
  ];



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

    if (key === "unvan")
      error = value === "" ? "unvan Alanını Doldurunuz" : "";
    else if (key === "baglioldugumudurluk")
      error = value === "" ? "Bağlı olduğu müdürlük Alanını Doldurunuz" : "";
    else if (key === "baglioldugumudur")
      error = value === "" ? "Bağlı Olduğu Müdür Alanını Doldurunuz" : "";
    else if (key === "kidem")
      error = value === "" ? "Kıdem Alanını Doldurunuz" : "";
    // else if (key === "il")
    //   error = value === "" ? "İl Alanını Doldurunuz" : "";
    // else if (key === "sirket")
    //   error = value === "" ? "Şirket Alanını Doldurunuz" : "";
    return error;
  };

  const onChange = (e) => {

    const { key, value } = getKeyValue(e);

    setFormErrors({ ...formErrors, [key]: checkError(key, value) });

    setIsBilgisi({ ...isBilgisi, [key]: value });

  };
  const checkErrors = async (user) => {

    let errors = { ...formErrors };

    Object.entries(user).forEach(([key, value]) => {
      errors[key] = checkError(key, value);
    });

    return errors;
  };
 
  const next = () => {

    checkErrors(isBilgisi).then(formErrors => {
      if (formValid(formErrors)) {

        props.next(isBilgisi);

      }
      else
        setFormErrors(formErrors);
    });
  };


  const prev = () => {
    props.prev(isBilgisi);
  };
  return (
    <div>
      <Growl ref={growl} />
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <InputText name="unvan" type="text" size={30} value={isBilgisi.unvan} className={formErrors.ad ? "error" : ""} onChange={onChange} />
            <label htmlFor="float-input">Ünvan</label>
          </span>
          {formErrors.unvan && <Message severity="error" text={formErrors.unvan} />}
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <InputText name="baglioldugumudurluk" value={isBilgisi.baglioldugumudurluk} type="text" size={30} className={formErrors.ad ? "error" : ""} onChange={onChange} />
            <label htmlFor="float-input">Bağlı Olduğu Müdürlük</label>
          </span>
          {formErrors.baglioldugumudurluk && <Message severity="error" text={formErrors.baglioldugumudurluk} />}
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <InputText name="baglioldugumudur" type="text" size={30} value={isBilgisi.baglioldugumudur} className={formErrors.ad ? "error" : ""} onChange={onChange} />
            <label htmlFor="float-input">Bağlı Olduğu Müdür/Amir</label>
          </span>
          {formErrors.baglioldugumudur && <Message severity="error" text={formErrors.baglioldugumudur} />}
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <InputText name="kidem" type="text" size={30} value={isBilgisi.kidem} className={formErrors.ad ? "error" : ""} onChange={onChange} />
            <label htmlFor="float-input">Kıdem</label>
          </span>
          {formErrors.kidem && <Message severity="error" text={formErrors.kidem} />}
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <Dropdown id="sirket" name="sirket" value={isBilgisi.sirket} options={sirketlist}  onChange={onChange}  style={{ width: '12em' }} optionLabel="name" optionValue="code" />
            <label htmlFor="sirket">Çalıştığı Şirket</label>
          </span>
          {formErrors.sirket && <Message severity="error" text={formErrors.sirket} />}
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <Dropdown name="il" value={isBilgisi.il} options={props.ilList} onChange={onChange} style={{ width: '12em' }}
              filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true}
              optionLabel="label" optionValue="value" />
            <label htmlFor="Il">Çalıştığı İl</label>
          </span>
          {formErrors.il && <Message severity="error" text={formErrors.il} />}
        </div>
        <div className="p-col-12">
          <Button label="Geri"  icon="pi pi-angle-left" onClick={prev} style={{ width: '10em'}} />
          <Button label="İleri"  icon="pi pi-angle-right" iconPos="right"  onClick={next} style={{ width: '10em', marginLeft: 8  }} />
        </div>
      </div>
    </div>
  );
};

export default IsBilgileri