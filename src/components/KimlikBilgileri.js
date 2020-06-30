import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import '../layout/sass/personelKayit.scss';


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
      tc: 0,
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
      ogrenimDrurum:false,
      verilistarihi:null

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
    else if (this.state.soyad.length < 1 )
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
    this.setState({
      reqClassAd: this.state.ad.length < 1 ? "" : "divDisplayNone",
      reqClassSoyad: this.state.soyad.length < 1 ? "" : "divDisplayNone",
      reqClassTCkimlik: this.state.tc < 10000000000 ? "" : "divDisplayNone"
    });

    if (this.handleValidation()) {
      this.props.parentCallback(this.state);
    }
    else {
      console.log("validate");
    }

    
  }

  render() {
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

        </div>
        <div className="p-col-12 p-md-4">
          <h3>Soyad*</h3>
          <span className="p-float-label">
            <InputText name="soyad" type="text" size={30} value={this.state.soyad} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Soyad</label>
          </span>
          <div className={this.state.reqClassSoyad} >
            <Message severity="error" text="Soyad Alanı Boş Geçilemez" />
          </div>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>T.C Kimlik No*</h3>
          <span className="p-float-label">
            <InputText name="tc" type="number" maxLength="11" size="11" min="0" max="99999999999" value={this.state.tc} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">T.C Kimlik No</label>
          </span>
          <div className={this.state.reqClassTCkimlik} >
            <Message severity="error" text="TC Kimlik No Alanı Boş Geçilemez" />
          </div>
        </div >
        <div className="p-col-12 p-md-4">
          <h3>Cinsiyeti</h3>
          <div className="p-grid" style={{ width: '250px', marginBottom: '10px' }}>
            <div className="p-col-12">
              <RadioButton inputId="rbkadin" name="cinsiyet" value={"Kadın"} onChange={(e) => this.handleInputChange(e)} checked={this.state.cinsiyet === 'Kadın'} />
              <label htmlFor="rb1" className="p-radiobutton-label">Kadın </label>
              <RadioButton inputId="rberkek" name="cinsiyet" value={"Erkek"} onChange={(e) => this.handleInputChange(e)} checked={this.state.cinsiyet === 'Erkek'} />
              <label htmlFor="rb2" className="p-radiobutton-label">Erkek</label>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Baba Adı</h3>
          <span className="p-float-label">
            <InputText name="babaadi" type="text" size={30} value={this.state.babaadi} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Baba Adı</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Anne Adı</h3>
          <span className="p-float-label">
            <InputText name="anneadi" type="text" size={30} value={this.state.anneadi} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Anne Adı</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Medeni Durum</h3>
          <div className="p-col-12">
            <RadioButton inputId="rbEvli" name="medeniDurum" value={"Evli"} onChange={(e) => this.handleInputChange(e)} checked={this.state.medeniDurum === 'Evli'}/>
            <label htmlFor="rb1" className="p-radiobutton-label">Evli </label>
            <RadioButton inputId="rbBekar" name="medeniDurum" value={"Bekar"} onChange={(e) => this.handleInputChange(e)} checked={this.state.medeniDurum === 'Bekar'} />
            <label htmlFor="rb2" className="p-radiobutton-label">Bekar</label>
          </div>
        </div >
        <div className="p-col-12 p-md-4">
          <h3>Uyruğu</h3>
          <span className="p-float-label">
            <InputText name="uyruk" type="text" size={30} value={this.state.uyruk} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Uyruğu</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu İl</h3>
          <span className="p-float-label">
            <InputText name="il" type="text" size={30} value={this.state.il} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu İl</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu İlçe</h3>
          <span className="p-float-label">
            <InputText name="ilce" type="text" size={30} value={this.state.ilce} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu İlçe</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu Mahalle/Köy</h3>
          <span className="p-float-label">
            <InputText name="mahallekoy" type="text" size={30} value={this.state.mahallekoy} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu Mahalle/Köy</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu Cilt No</h3>
          <span className="p-float-label">
            <InputText name="ciltno" type="text" size={30} value={this.state.ciltno} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu Cilt No</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu Aile Sıra No</h3>
          <span className="p-float-label">
            <InputText name="ailesirano" type="text" size={30} value={this.state.ailesirano} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu Aile Sıra No</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıtlı Olduğu Sıra No</h3>
          <span className="p-float-label">
            <InputText name="sirano" type="text" size={30} value={this.state.sirano} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıtlı Olduğu Sıra No</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kayıt No</h3>
          <span className="p-float-label">
            <InputText name="kayitno" type="text" size={30} value={this.state.kayitno} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Kayıt No</label>
          </span>
        </div>

        <div className="p-col-12 p-md-4">
          <h3>Kayıt No</h3>
          <span className="p-float-label">
            <InputText id="kayitno" type="text" size={30} value={this.state.kayitno} onChange={(e) => this.setState({ kayitno: e.target.value })} />
            <label htmlFor="float-input">Kayıt No</label>
          </span>
          <h3>Cüzdan Seri - No</h3>
          <span className="p-float-label">
            <InputText name="cuzdanserino" type="text" size={30} value={this.state.serino} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">Cüzdan Seri - No</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Veriliş Tarihi</h3>
          <span className="p-float-label">
            <Calendar name="verilistarihi" value={this.state.verilistarihi}  onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-calendar">Veriliş Tarihi</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Kan Grubu</h3>
          <Dropdown value={this.state.kangrubu} options={this.kangrubulist} onChange={this.onkangrubuchange} optionLabel="name" style={{ width: '12em' }} />
        </div>
        <div className="p-col-12 p-md-4">
          <h3>İşe İlk Başladığındaki Soyadı</h3>
          <span className="p-float-label">
            <InputText name="ilksoyad" type="text" size={30} value={this.state.ibsoyad} onChange={(e) => this.handleInputChange(e)} />
            <label htmlFor="float-input">İşe İlk Başladığındaki Soyadı</label>
          </span>
          {/* <div>
            <h3>Fotoğraf</h3>
            <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload}
              multiple={true} accept="image/*" maxFileSize={1000000} />
            <Growl ref={(el) => { this.growl = el; }}></Growl>
          </div> */}
        </div>
        <div className="p-col-12 p-md-12"></div>
        <div className="p-col-12 p-md-8"></div>
        <div className="p-col-12 p-md-2">
          <Button id="kaydet" label="Kaydet" icon="pi pi-check" iconPos="left" className="p-button-success" onClick={() => this.sendData()} />
        </div>
      </div >
    );
  }
}