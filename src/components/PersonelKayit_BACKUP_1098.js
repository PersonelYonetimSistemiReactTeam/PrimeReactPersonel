
import React, { Component } from "react";
import { CountryService } from "../service/CountryService";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { AutoComplete } from "primereact/autocomplete";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { Chips } from "primereact/chips";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Spinner } from "primereact/spinner";
import { Slider } from "primereact/components/slider/Slider";
import { ListBox } from "primereact/listbox";
import { Rating } from "primereact/rating";
import { ColorPicker } from "primereact/colorpicker";
import { Editor } from "primereact/editor";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { TabView, TabPanel } from "primereact/tabview";
import {InputMask} from 'primereact/inputmask';

import React, { Component } from 'react';
import { CountryService } from '../service/CountryService';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { AutoComplete } from 'primereact/autocomplete';
import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { Chips } from 'primereact/chips';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { InputSwitch } from 'primereact/inputswitch';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { Spinner } from 'primereact/spinner';
import { Slider } from 'primereact/components/slider/Slider';
import { ListBox } from 'primereact/listbox';
import { Rating } from 'primereact/rating';
import { ColorPicker } from 'primereact/colorpicker';
import { Editor } from 'primereact/editor';
import { ToggleButton } from 'primereact/togglebutton';
import { SelectButton } from 'primereact/selectbutton';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import {TabView,TabPanel} from 'primereact/tabview';

export class PersonelKayit extends Component {
    constructor() {
        super();
        this.state = {
            unvan: 'Yazılım Uzmanı'
        };

        this.unvanlar = [
            { label: 'Yazılım Uzmanı', value: 'Yazılım Uzmanı' },
            { label: 'Kıdemli Yazılım Uzmanı', value: 'Kıdemli Yazılım Uzmanı' },
            { label: 'Proje Müdür Yardımcısı', value: 'Proje Müdür Yardımcısı' },
            { label: 'Proje Müdürü', value: 'Proje Müdürü' }
        ];
    

        this.onUnvanChange = this.onUnvanChange.bind(this);
    }
    onUnvanChange(e) {
        this.setState({ unvan: e.value });
      }

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Personel Kayıt</h1>
                        <TabView renderActiveOnly={false}>
                            <TabPanel header="Kimlik Bilgileri" leftIcon="pi pi-calendar">
                                <p>
                                    Kimlik bilgileri
                                </p>
                                <div>
                                    <div className="p-grid p-fluid">
                                        <div className="p-col-12 p-md-4">
                                            <h3>Cüzdan Seri - No</h3>
                                            <span className="p-float-label">
                                                <InputText id="cuzdanserino" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Cüzdan Seri - No</label>
                                            </span>
                                            <h3>Uyruğu</h3>
                                            <span className="p-float-label">
                                                <InputText id="uyruk" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Uyruğu</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
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
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Medeni Hali</h3>
                                            <span className="p-float-label">
                                                <InputText id="medenihal" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Medeni Hali</label>
                                            </span>
                                            <h3>Cinsiyeti</h3>
                                            <span className="p-float-label">
                                                <InputText id="cinsiyeti" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Cinsiyeti</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Dini</h3>
                                            <span className="p-float-label">
                                                <InputText id="dini" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Dini</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kan Grubu</h3>
                                            <span className="p-float-label">
                                                <InputText id="kangrubu" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kan Grubu</label>
                                            </span>
                                        </div>
                             
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıtlı Olduğu İl</h3>
                                            <span className="p-float-label">
                                                <InputText id="kolduguil" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıtlı Olduğu İl</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıtlı Olduğu İlçe</h3>
                                            <span className="p-float-label">
                                                <InputText id="kolduguilce" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıtlı Olduğu İlçe</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıtlı Olduğu Mahalle/Köy</h3>
                                            <span className="p-float-label">
                                                <InputText id="mahallekoy" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıtlı Olduğu Mahalle/Köy</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıtlı Olduğu Cilt No</h3>
                                            <span className="p-float-label">
                                                <InputText id="ciltno" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıtlı Olduğu Cilt No</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıtlı Olduğu Aile Sıra No</h3>
                                            <span className="p-float-label">
                                                <InputText id="ailesirano" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıtlı Olduğu Aile Sıra No</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıtlı Olduğu Sıra No</h3>
                                            <span className="p-float-label">
                                                <InputText id="sirano" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıtlı Olduğu Sıra No</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Kayıt No</h3>
                                            <span className="p-float-label">
                                                <InputText id="kayitno" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">Kayıt No</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>Veriliş Tarihi</h3>
                                            <span className="p-float-label">
                                                <Calendar id="verilistarihi" value={this.state.calendarValue} onChange={(e) => this.setState({ calendarValue: e.value })} />
                                                <label htmlFor="float-calendar">Veriliş Tarihi</label>
                                            </span>
                                        </div>
                                        <div className="p-col-12 p-md-4">
                                            <h3>İşe İlk Başladığındaki Soyadı</h3>
                                            <span className="p-float-label">
                                                <InputText id="ilksoyad" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                                <label htmlFor="float-input">İşe İlk Başladığındaki Soyadı</label>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                    </TabPanel>
                    <TabPanel header=" Öğrenim Bilgileri" rightIcon="pi pi-user">
                        <p>
                        Öğrenim bilgileri
                        </p>
                    </TabPanel>
                    <TabPanel header="İletişim Bilgileri" leftIcon="pi pi-search" rightIcon="pi pi-check">

                 
                  <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-8">
                      <h3>Sokak</h3>
                      <span className="p-float-label">
                        <InputText
                          id="float-input"
                          type="text"
                          size={30}
                          value={this.state.inputtextValue}
                          onChange={(e) =>
                            this.setState({ inputtextValue: e.target.value })
                          }
                        />
                        <label htmlFor="float-input">Sokak</label>
                      </span>
                    </div>
                    <div className="p-col-12 p-md-8">
                      <h3>Cadde</h3>
                      <span className="p-float-label">
                        <InputText
                          id="float-input"
                          type="text"
                          size={30}
                          value={this.state.inputtextValue}
                          onChange={(e) =>
                            this.setState({ inputtextValue: e.target.value })
                          }
                        />
                        <label htmlFor="float-input">Cadde</label>
                      </span>
                    </div>
                    <div className="p-col-12 p-md-8">
                        <h3>Dropdown</h3>
                        <span className="p-float-label">
                            <Dropdown id="float-dropdown" value={this.state.city} options={this.cities} ariaLabel="Test" onChange={this.onCityChange} optionLabel="name"/>
                            <label htmlFor="float-dropdown">Select City</label>
                        </span>
                    </div>

                    <div className="p-col-12 p-md-8">
                        <h3>Telefon Numarası</h3>
                        <span className="p-float-label">
                            <InputMask id="float-mask" mask="5999999999" value={this.state.maskValue} onChange={(e) => this.setState({maskValue: e.value})}/>
                            <label htmlFor="float-mask">599999999</label>
                        </span>
                    </div>
                    <div className="p-col-12 p-md-8">
                      <h3>Adres Bilgisi </h3>
                      <span className="p-float-label">
                        <InputTextarea
                          id="float-textarea"
                          value={this.state.textareaValue}
                          onChange={(e) =>
                            this.setState({ textareaValue: e.target.value })
                          }
                          rows={5}
                          cols={30}
                        />
                        <label htmlFor="float-textarea">Adres</label>
                      </span>
                    </div>
                  </div>
                  </TabPanel>
            </TabView>
                </div>
         
        </div>
      </div>
    );
  }
}

