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