import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import '../layout/sass/personelKayit.scss';
import { InputMask } from 'primereact/inputmask';


export class KimlikBilgileri extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      cinsiyet: "Kadın",
      medeniDurum: "Evli",
      kangrubu: null,
      ad: "",
      soyad: "",
      tc: "",
      babaadi: null,
      anneadi: null,
      reqClassAd: "divDisplayNone",
      reqClassSoyad: "divDisplayNone",
      reqClassTCkimlik: "divDisplayNone",
      uyruk: null,
      il: null,
      ilce: null,
      mahallekoy: null,
      ciltno: null,
      ailesirano: null,
      sirano: null,
      kayitno: null,
      serino: null,
      ibsoyad: null,
      ogrenimDrurum: false,
      verilistarihi: null,
      KimlikBilgileriAlindi: false,
      calisti: false
    };


    this.kangrubulist = [
      { name: 'O Rh-pozitif', code: 'O Rh-pozitif' },
      { name: '0 Rh-negatif', code: '0 Rh-negatif' },
      { name: 'A Rh-pozitif', code: 'A Rh-pozitif' },
      { name: 'A Rh-negatif', code: 'A Rh-negatif' },
      { name: 'B Rh-pozitif', code: 'B Rh-pozitif' },
      { name: 'B Rh-negatif', code: 'B Rh-negatif' },
      { name: 'AB Rh-pozitif', code: 'AB Rh-pozitif' },
      { name: 'AB Rh-negatif', code: 'AB Rh-negatif' }
    ];

    this.onkangrubuchange = this.onkangrubuchange.bind(this);
    this.sendData = this.sendData.bind(this);
  };
  handleValidation() {
    let validate = true;
    if (this.state.ad.length < 1)
      validate = false
    else if (this.state.soyad.length < 1)
      validate = false
    else if (this.state.tc < 10000000000)
      validate = false

    return validate;

  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    if (event.target.name === "ad") {
      this.setState({ reqClassAd: event.target.value.length < 1 ? "" : "divDisplayNone" })
    }
    else if (event.target.name === "soyad") {
      this.setState({ reqClassSoyad: event.target.value.length < 1 ? "" : "divDisplayNone" })
    }
    else if (event.target.name === "tc") {
      this.setState({ reqClassTCkimlik: event.target.value < 10000000000 ? "" : "divDisplayNone" })
    }

  }


  onkangrubuchange(e) {
    this.setState({ kangrubu: e.value });
  }
  sendData() {
    if (this.handleValidation()) {
      return true
    }
    else {
      return false;
    }


  }

  render() {
    const save = this.props[0];
    {
      {
        if (save === "1") {

          if (this.handleValidation()) {
            this.props.parentCallback(this.state, true);
            this.setState({ calisti: true });
          }
          else
            this.props.parentCallback(this.state, false);
        }

      }
    }
    return (

      <div className="p-grid p-fluid">
        <div className="p-col-12 p-md-4">
          <h3>Ad*</h3>
          <span className="p-float-label">
            <InputText name="ad" type="text" size={30} value={this.state.ad} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Ad</label>
          </span>
          <div className={this.state.reqClassAd} >
            <Message severity="error" text="Ad Alanı Boş Geçilemez" />
          </div>
          <h3>Soyad*</h3>
          <span className="p-float-label">
            <InputText name="soyad" type="text" size={30} value={this.state.soyad} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Soyad</label>
          </span>
          <div className={this.state.reqClassSoyad} >
            <Message severity="error" text="Soyad Alanı Boş Geçilemez" />
          </div>
          <h3>T.C Kimlik No*</h3>
          <span className="p-float-label">
            <InputMask id="float-mask" name="tc" mask="99999999999" autoClear={false} value={this.state.tc} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">T.C Kimlik No</label>
          </span>
          <div className={this.state.reqClassTCkimlik} >
            <Message severity="error" text="TC Kimlik No Alanı Boş Geçilemez" />
          </div>
          <h3>Kan Grubu</h3>
          <Dropdown value={this.state.kangrubu} options={this.kangrubulist} onChange={this.onkangrubuchange} optionLabel="name" style={{ width: '12em' }} />


        </div>
        <div className="p-col-12 p-md-4">
          <h3>Anne Adı</h3>
          <span className="p-float-label">
            <InputText name="anneadi" type="text" size={30} value={this.state.anneadi} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Anne Adı</label>
          </span>
          <h3>Baba Adı</h3>
          <span className="p-float-label">
            <InputText name="babaadi" type="text" size={30} value={this.state.babaadi} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Baba Adı</label>
          </span>
          <h3>Uyruğu</h3>
          <span className="p-float-label">
            <InputText name="uyruk" type="text" size={30} value={this.state.uyruk} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Uyruğu</label>
          </span>
          <h3>Cinsiyeti</h3>
          <div className="p-grid" style={{ width: '250px', marginBottom: '10px' }}>
            <div className="p-col-12">
              <RadioButton inputId="rbkadin" name="cinsiyet" value={"Kadın"} onChange={(e) => this.handleInputChange(e)} checked={this.state.cinsiyet === 'Kadın'} />
              <label htmlFor="rb1" className="p-radiobutton-label">Kadın </label>
              <RadioButton inputId="rberkek" name="cinsiyet" value={"Erkek"} onChange={(e) => this.handleInputChange(e)} checked={this.state.cinsiyet === 'Erkek'} />
              <label htmlFor="rb2" className="p-radiobutton-label">Erkek</label>
              <h3>Medeni Durum</h3>
              <div className="p-col-12">
                <RadioButton inputId="rbEvli" name="medeniDurum" value={"Evli"} onChange={(e) => this.handleInputChange(e)} checked={this.state.medeniDurum === 'Evli'} />
                <label htmlFor="rb1" className="p-radiobutton-label">Evli </label>
                <RadioButton inputId="rbBekar" name="medeniDurum" value={"Bekar"} onChange={(e) => this.handleInputChange(e)} checked={this.state.medeniDurum === 'Bekar'} />
                <label htmlFor="rb2" className="p-radiobutton-label">Bekar</label>
              </div>
              </div>         
          </div>
        </div>

        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu İl</h3>
          <span className="p-float-label">
            <InputText name="il" type="text" size={30} value={this.state.il} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu İl</label>
          </span>
          <h3>Kayıtlı Olduğu İlçe</h3>
          <span className="p-float-label">
            <InputText name="ilce" type="text" size={30} value={this.state.ilce} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu İlçe</label>
          </span>
          <h3>Kayıtlı Olduğu Mahalle/Köy</h3>
          <span className="p-float-label">
            <InputText name="mahallekoy" type="text" size={30} value={this.state.mahallekoy} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu Mahalle/Köy</label>
          </span>
        </div>



      </div >
    );
  }
}

