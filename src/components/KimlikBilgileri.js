import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';


export class KimlikBilgileri extends Component {
  constructor() {
    super();
    this.state = {
      cinsiyet: null,
      medeniDurum: null,
      kangrubu: null
    };

    this.medenidurum = [
      { name: 'Evli', code: 'Evli' },
      { name: 'Bekar', code: 'Bekar' },
    ];
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

    this.onmedenidurum = this.onmedenidurum.bind(this);
    this.onkangrubuchange = this.onkangrubuchange.bind(this);

  };
 
  onmedenidurum(e) {
    this.setState({ medeniDurum: e.value });
  }
  onkangrubuchange(e) {
    this.setState({ kangrubu: e.value });
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 p-md-4">
          <h3>Ad</h3>
          <span className="p-float-label">
            <InputText id="ad" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Ad</label>
          </span>
          <h3>Soyad</h3>
          <span className="p-float-label">
            <InputText id="soyad" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Soyad</label>
          </span>
          <h3>T.C Kimlik No</h3>
          <span className="p-float-label">
            <InputText id="tc" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">T.C Kimlik No</label>
          </span>
          <h3>Cinsiyeti</h3>

          <div className="p-grid" style={{ width: '250px', marginBottom: '10px' }}>
            <div className="p-col-12">
              <RadioButton inputId="rbkadin" name="cinsiyet" value="Kadın" onChange={(e) => this.setState({ city: e.value })} checked={this.state.city === 'Kadın'} />
              <label htmlFor="rb1" className="p-radiobutton-label">Kadın</label>
              <RadioButton inputId="rberkek" name="cinsiyet" value="Erkek" onChange={(e) => this.setState({ city: e.value })} checked={this.state.city === 'Erkek'} />
              <label htmlFor="rb2" className="p-radiobutton-label">Erkek</label>
            </div>
          </div>
          <h3>Baba Adı</h3>
          <span className="p-float-label">
            <InputText id="babaadi" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Baba Adı</label>
          </span>
          <h3>Anne Adı</h3>
          <span className="p-float-label">
            <InputText id="anneadi" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Anne Adı</label>
          </span>
          <h3>Medeni Durum</h3>
          <Dropdown value={this.state.medeniDurum} options={this.medenidurum} onChange={this.onmedenidurum} optionLabel="name" style={{ width: '12em' }} />
          <h3>Dini</h3>
          <span className="p-float-label">
            <InputText id="dini" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Dini</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Uyruğu</h3>
          <span className="p-float-label">
            <InputText id="uyruk" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Uyruğu</label>
          </span>
          <h3>Kayıtlı Olduğu İl</h3>
          <span className="p-float-label">
            <InputText id="kolduguil" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıtlı Olduğu İl</label>
          </span>
          <h3>Kayıtlı Olduğu İlçe</h3>
          <span className="p-float-label">
            <InputText id="kolduguilce" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıtlı Olduğu İlçe</label>
          </span>
          <h3>Kayıtlı Olduğu Mahalle/Köy</h3>
          <span className="p-float-label">
            <InputText id="mahallekoy" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıtlı Olduğu Mahalle/Köy</label>
          </span>
          <h3>Kayıtlı Olduğu Cilt No</h3>
          <span className="p-float-label">
            <InputText id="ciltno" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıtlı Olduğu Cilt No</label>
          </span>
          <h3>Kayıtlı Olduğu Aile Sıra No</h3>
          <span className="p-float-label">
            <InputText id="ailesirano" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıtlı Olduğu Aile Sıra No</label>
          </span>
          <h3>Kayıtlı Olduğu Sıra No</h3>
          <span className="p-float-label">
            <InputText id="sirano" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıtlı Olduğu Sıra No</label>
          </span>
          <h3>Kayıt No</h3>
          <span className="p-float-label">
            <InputText id="kayitno" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Kayıt No</label>
          </span>
        </div>
        <div className="p-col-12 p-md-4">
          <h3>Cüzdan Seri - No</h3>
          <span className="p-float-label">
            <InputText id="cuzdanserino" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">Cüzdan Seri - No</label>
          </span>
          <h3>Veriliş Tarihi</h3>
          <span className="p-float-label">
            <Calendar id="verilistarihi" value={this.state.calendarValue} onChange={(e) => this.setState({ calendarValue: e.value })} />
            <label htmlFor="float-calendar">Veriliş Tarihi</label>
          </span>
          <h3>Kan Grubu</h3>
          <Dropdown value={this.state.kangrubu} options={this.kangrubulist} onChange={this.onkangrubuchange} optionLabel="name" style={{ width: '12em' }} />
          <h3>İşe İlk Başladığındaki Soyadı</h3>
          <span className="p-float-label">
            <InputText id="ilksoyad" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
            <label htmlFor="float-input">İşe İlk Başladığındaki Soyadı</label>
          </span>
        </div>
      </div>
    );
  }
}