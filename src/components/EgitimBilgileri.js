import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { EgitimSeviyeleri } from './EgitimSeviyeleri'


export class EgitimBilgileri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unvan: 'Yazılım Uzmanı',
            egitim: '0'
        };

        this.unvanlar = [
            { label: 'Yazılım Uzmanı', value: 'Yazılım Uzmanı' },
            { label: 'Kıdemli Yazılım Uzmanı', value: 'Kıdemli Yazılım Uzmanı' },
            { label: 'Proje Müdür Yardımcısı', value: 'Proje Müdür Yardımcısı' },
            { label: 'Proje Müdürü', value: 'Proje Müdürü' }
        ];
        this.egitimseviyeleri = [
            { label: 'Seçiniz', value: "0" },
            { label: 'İlköğretim', value: "1" },
            { label: 'Orta Öğretim', value: '2' },
            { label: 'Lise', value: '3' },
            { label: 'Üniversite', value: '4' },
            { label: 'Yüksek Lisans ', value: '5' },
            { label: 'Doktora', value: '6' }

        ];


        this.onEgitimChange = this.onEgitimChange.bind(this);
        this.onUnvanChange = this.onUnvanChange.bind(this);

    };
    onUnvanChange(e) {
        this.setState({ unvan: e.value });
    }
    onEgitimChange(e) {
        this.setState({ egitim: e.value });
    }


    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>Eğitim Seviyesi</h3>
                    <Dropdown value={this.state.egitim} options={this.egitimseviyeleri} onChange={this.onEgitimChange} style={{ width: '12em' }}
                        filter={true} filterPlaceholder="Eğitim Durumu Seçiniz" filterBy="label,value" showClear={true} />                    
                </div>
                <EgitimSeviyeleri {...this.state.egitim} />
            </div>
        );
    }
}