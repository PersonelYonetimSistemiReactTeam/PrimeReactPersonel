import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import '../layout/sass/personelKayit.scss';
import { InputMask } from 'primereact/inputmask';
import PersonelConsumer from '../context';
import { Growl } from 'primereact/growl';



const KimlikBilgileri = (props) => {

  const [kimlik, setKimlik] = useState({
    ad: "",
    soyad: "",
    tcKimlik: "",
    kangrubu: "",
    anneadi: "",
    babaadi: "",
    uyruk: "",
    cinsiyet: "",
    medenidurum: "",
    il: "",
    ilce: "",
    mahallekoy: "", ...props.kimlikBilgisi
  });
  const [formErrors, setFormErrors] = useState({});

  let growl = useRef(null);

  const kangrubulist = [
    { name: 'O Rh-pozitif', code: 'O Rh-pozitif' },
    { name: '0 Rh-negatif', code: '0 Rh-negatif' },
    { name: 'A Rh-pozitif', code: 'A Rh-pozitif' },
    { name: 'A Rh-negatif', code: 'A Rh-negatif' },
    { name: 'B Rh-pozitif', code: 'B Rh-pozitif' },
    { name: 'B Rh-negatif', code: 'B Rh-negatif' },
    { name: 'AB Rh-pozitif', code: 'AB Rh-pozitif' },
    { name: 'AB Rh-negatif', code: 'AB Rh-negatif' }
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

    if (key === "ad")
      error = value === "" ? "Ad Alanını Doldurunuz" : "";
    else if (key === "soyad")
      error = value === "" ? "Soyad Alanını Doldurunuz" : "";
    else if (key === "tc")
      error = value.length < 11 ? "Hatalı TC" : "";
    return error;
  };

  const onChange = (e) => {

    const { key, value } = getKeyValue(e);

    setFormErrors({ ...formErrors, [key]: checkError(key, value) });

    setKimlik({ ...kimlik, [key]: value });

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

    checkErrors(kimlik).then(formErrors => {
      if (formValid(formErrors)) {

        props.next(kimlik);

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
        <span className="p-float-label">
          <InputText name="ad" size={30} value={kimlik.ad} className={formErrors.ad ? "error" : ""} onChange={onChange} />
          <label htmlFor="float-input">Ad</label>
        </span>
        {formErrors.ad && <Message severity="error" text={formErrors.ad} />}
      </div>
      <div className="p-col-12 p-md-4">
        <span className="p-float-label">
          <InputText name="soyad" size={30} value={kimlik.soyad} className={formErrors.soyad ? "error" : ""} onChange={onChange} />
          <label htmlFor="float-input">Soyad</label>
        </span>
      </div>
      <div className="p-col-12 p-md-4">

        <span className="p-float-label">
          <InputMask id="float-mask" name="tc" mask="99999999999" autoClear={false} value={kimlik.tc} onChange={onChange} />
          <label htmlFor="float-input">T.C Kimlik No</label>
        </span>
      </div>
      <div className="p-col-12 p-md-4">
        <span className="">
        {/* <label htmlFor="kangrubu">Kan Grubu</label> */}
          <Dropdown id="kangrubu" name="kangrubu" value={kimlik.kangrubu} options={kangrubulist} ariaLabel="Test" onChange={onChange} optionLabel="name" optionValue="code" />
        </span>
      </div>


      <div className="p-col-12 p-md-4">
        <span className="p-float-label">
          <InputText name="anneadi" type="text" size={30} value={kimlik.anneadi} onChange={onChange} />
          <label htmlFor="float-input">Anne Adı</label>
        </span>
      </div>
      <div className="p-col-12 p-md-4">
        <span className="p-float-label">
          <InputText name="babaadi" type="text" size={30} value={kimlik.babaadi} onChange={onChange} />
          <label htmlFor="float-input">Baba Adı</label>
        </span>
        </div>
        <div className="p-col-12 p-md-4">

          <span className="p-float-label">
            <InputText name="uyruk" type="text" size={30} value={kimlik.uyruk} onChange={onChange} />
            <label htmlFor="float-input">Uyruğu</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <label htmlFor="float-input">Cinsiyet</label>
          <RadioButton inputId="rbkadin" name="cinsiyet" value="Kadın" onChange={onChange} checked={kimlik.cinsiyet === 'Kadın'} />
          <label htmlFor="rb1" className="p-radiobutton-label">Kadın </label>
          <RadioButton inputId="rberkek" name="cinsiyet" value="Erkek" onChange={onChange} checked={kimlik.cinsiyet === 'Erkek'} />
          <label htmlFor="rb2" className="p-radiobutton-label">Erkek</label>
        </div>
        <div className="p-col-12 p-md-4">
          <label htmlFor="float-input">Medeni Durum</label>
          <RadioButton inputId="rbEvli" name="medenidurum" value="Evli" onChange={onChange} checked={kimlik.medenidurum === 'Evli'} />
          <label htmlFor="rb1" className="p-radiobutton-label">Evli </label>
          <RadioButton inputId="rbBekar" name="medenidurum" value="Bekar" onChange={onChange} checked={kimlik.medenidurum === 'Bekar'} />
          <label htmlFor="rb2" className="p-radiobutton-label">Bekar</label>
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <InputText name="il" type="text" size={30} value={kimlik.il} onChange={onChange} />
            <label htmlFor="float-input">Kayıtlı Olduğu İl</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">

          <span className="p-float-label">
            <InputText name="ilce" type="text" size={30} value={kimlik.ilce} onChange={onChange} />
            <label htmlFor="float-input">Kayıtlı Olduğu İlçe</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <span className="p-float-label">
            <InputText name="mahallekoy" type="text" size={30} value={kimlik.mahallekoy} onChange={onChange} />
            <label htmlFor="float-input">Kayıtlı Olduğu Mahalle/Köy</label>
          </span>

        </div>
        <div className="p-col-12">
          <Button label="İleri" style={{ marginLeft: 8 }} icon="pi pi-angle-right" onClick={next} style={{width:'10em'}} />
        </div>
    </div>
    </div>
  );



};
export default KimlikBilgileri