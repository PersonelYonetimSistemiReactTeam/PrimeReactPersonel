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
                           
                                <div className="p-col-12 p-md-12">
                                    <span className="p-float-label">
                                        <InputText id="in"  />
                                        {/* <InputText id="in" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} /> */}
                                        <label htmlFor="in">Ad Soyad</label>
                                    </span>
                                </div>

                                <div className="p-col-12 p-md-12">
                                    <Dropdown value={this.state.unvan} options={this.unvanlar} onChange={this.onUnvanChange} itemTemplate={this.UnvanTemplate} style={{ width: '12em' }}
                                        filter={true} filterPlaceholder="Unvan" filterBy="label,value" showClear={true} />
                                    <div style={{ marginTop: '.5em' }}>{this.state.unvan ? 'Seçilen Unvan: ' + this.state.unvan : 'Unvan Seçilmedi'}</div>

                                </div>
                                <div className="p-col-12 p-md-12">
                                    <span className="p-float-label">
                                        <InputText id="in" />
                                        {/* <InputText id="in" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} /> */}
                                        <label htmlFor="in">Birim</label>
                                    </span>
                                </div>
                                 <div className="p-col-12 p-md-12">
                                    <span className="p-float-label">
                                        <InputText id="in" />
                                        {/* <InputText id="in" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} /> */}
                                        <label htmlFor="in"></label>
                                    </span>
                                </div>                       
                    </div>
                </div>
            </div>
        );
    }
}