import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';

export class EgitimBilgileri extends Component {
    constructor() {
        super();
        this.state = {
            unvan: 'Yazılım Uzmanı',
            egitim: 'İlköğretim'
        };

        this.unvanlar = [
            { label: 'Yazılım Uzmanı', value: 'Yazılım Uzmanı' },
            { label: 'Kıdemli Yazılım Uzmanı', value: 'Kıdemli Yazılım Uzmanı' },
            { label: 'Proje Müdür Yardımcısı', value: 'Proje Müdür Yardımcısı' },
            { label: 'Proje Müdürü', value: 'Proje Müdürü' }
        ];
        this.egitimseviyeleri = [
            { label: 'İlköğretim', value: 'İlköğretim' },
            { label: 'Orta Öğretim', value: 'Orta Öğretim,' },
            { label: 'Lise', value: 'Lise' },
            { label: 'Meslek Yüksek Okulu', value: 'Meslek Yüksek Okulu' },
            { label: 'Üniversite', value: 'Üniversite' },
            { label: 'Yüksek Lisans ', value: 'Yüksek Lisans ' },
            { label: 'Doktora', value: 'Doktora' }

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
            </div>
        );
    }
}