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

    UnvanTemplate(option) {
        if (!option.value) {
            return option.label;
        }
        else {
            return (
                <div className="p-clearfix">
                    <span >{option.label}</span>
                </div>
            );
        }
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
                        <div className="p-col-12 p-md-4">
                                    <h3>Cüzdan Seri - No</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Cüzdan Seri - No</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Uyruğu</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Uyruğu</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Baba Adı</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Baba Adı</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Anne Adı</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Anne Adı</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Medeni Hali</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Medeni Hali</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Dini</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Dini</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Dini</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Dini</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kan Grubu</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kan Grubu</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Cinsiyeti</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Cinsiyeti</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıtlı Olduğu İl</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıtlı Olduğu İl</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıtlı Olduğu İlçe</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıtlı Olduğu İlçe</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıtlı Olduğu Mahalle/Köy</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıtlı Olduğu Mahalle/Köy</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıtlı Olduğu Cilt No</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıtlı Olduğu Cilt No</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıtlı Olduğu Aile Sıra No</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıtlı Olduğu Aile Sıra No</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıtlı Olduğu Sıra No</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıtlı Olduğu Sıra No</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Kayıt No</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">Kayıt No</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>Veriliş Tarihi</h3>
                                    <span className="p-float-label">
                                        <Calendar id="float-claendar" value={this.state.calendarValue} onChange={(e) => this.setState({ calendarValue: e.value })} />
                                        <label htmlFor="float-calendar">Veriliş Tarihi</label>
                                    </span>
                                </div>
                                <div className="p-col-12 p-md-4">
                                    <h3>İşe İlk Başladığındaki Soyadı</h3>
                                    <span className="p-float-label">
                                        <InputText id="float-input" type="text" size={30} value={this.state.inputtextValue} onChange={(e) => this.setState({ inputtextValue: e.target.value })} />
                                        <label htmlFor="float-input">İşe İlk Başladığındaki Soyadı</label>
                                    </span>
                                </div>
                    </TabPanel>
                    <TabPanel header=" Öğrenim Bilgileri" rightIcon="pi pi-user">
                        <p>
                        Öğrenim bilgileri
                        </p>
                    </TabPanel>
                    <TabPanel header="İletişim Bilgileri" leftIcon="pi pi-search" rightIcon="pi pi-check">
                        <p>
                            İletişim Bilgileri

                        </p>
                    </TabPanel>

                </TabView>
                                
                    </div>
                </div>
            </div>
        );
    }
}