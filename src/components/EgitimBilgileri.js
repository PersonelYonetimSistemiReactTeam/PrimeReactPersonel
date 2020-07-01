import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { EgitimSeviyeleri } from './EgitimSeviyeleri';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import '../layout/sass/personelKayit.scss';
import { OkulBilgisi } from './OkulBilgisi';
import { YuksekOkulBilgisi } from './YuksekOkulBilgisi'



export class EgitimBilgileri extends Component {
    constructor() {
        super();
        this.state = {
            egitim: '0',
            value: '',
            iletisimDurum: false,
            IlkOgretimBilgisi: "",
            OkulKontrol:"0",
            OrtaOgretimBilgisi: "",
            LiseBilgisi: "",
            LisansBilgisi: "",
            YLisansBilgisi: "",
            DoktoraBilgisi: "",
            reqClassEgitimSeviyesi: "divDisplayNone",
        };


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
        this.sendData = this.sendData.bind(this);
        this.callbackFunctionIlk = this.callbackFunctionIlk.bind(this)
        this.callbackFunctionOrta = this.callbackFunctionOrta.bind(this)
        this.callbackFunctionLise = this.callbackFunctionLise.bind(this)
        this.callbackFunctionLisans = this.callbackFunctionLisans.bind(this)
        this.callbackFunctionYuksekLisans = this.callbackFunctionYuksekLisans.bind(this)
        this.callbackFunctionDoktora = this.callbackFunctionDoktora.bind(this)

    }
    async callbackFunctionIlk(childData) {
        await this.setState({
            IlkOgretimBilgisi: childData
        });
    }
    async callbackFunctionOrta(childData) {
        await this.setState({
            OrtaOgretimBilgisi: childData
        });
    }
    async callbackFunctionLise(childData) {
        await this.setState({
            LiseBilgisi: childData
        });
    }
    async callbackFunctionLisans(childData) {
        await this.setState({
            LisansBilgisi: childData
        });
        console.log(this.state.LisansBilgisi)
    }
    async callbackFunctionYuksekLisans(childData) {
        await this.setState({
            YLisansBilgisi: childData
        });
    }
    async callbackFunctionDoktora(childData) {
        await this.setState({
            DoktoraBilgisi: childData
        });
    }

    onEgitimChange(e) {
        this.setState({ egitim: e.value, reqClassEgitimSeviyesi: e.value === "0" ? "" : "divDisplayNone" });
    }

    async sendData() {
        this.setState({
            reqClassEgitimSeviyesi: this.state.egitim === "0" ? "" : "divDisplayNone",
        });

        if (this.state.egitim === "0") {
            console.log("validate");
        }
        else {
            this.setState({
                OkulKontrol: "1",
            });
            setTimeout(() => {this.props.parentCallback(this.state);
            }, 1000);
            
          
        }
       

    }
    render() {

        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>Eğitim Seviyesi</h3>
                    <Dropdown value={this.state.egitim} options={this.egitimseviyeleri} onChange={this.onEgitimChange} style={{ width: '12em' }}
                        filter={true} filterPlaceholder="Eğitim Durumu Seçiniz" filterBy="label,value" showClear={true} />
                    <div className={this.state.reqClassEgitimSeviyesi} >
                        <Message severity="error" text="Eğitim Seviyesi Alanını Doldurunuz" />
                    </div>
                </div>
                <div className="p-col-12 p-md-12">
                    <div className="p-grid">
                        <div className="p-col-12 ">
                            <div className="card">
                                <div className={this.state.egitim > 0 ? 'okulBilgisi' : 'divDisplayNone'}>
                                    <h2>İlköğretim Bilgisi</h2>
                                    <OkulBilgisi {...this.state.OkulKontrol} parentCallback={this.callbackFunctionIlk} />
                                </div>
                                <div className={this.state.egitim  > 1 ? 'okulBilgisi' : 'divDisplayNone'} >
                                    <h2> Orta Öğretim Bilgisi</h2>
                                    <OkulBilgisi {...this.state.OkulKontrol} parentCallback={this.callbackFunctionOrta} />
                                </div>
                                <div className={this.state.egitim  > 2 ? 'okulBilgisi' : 'divDisplayNone'} >
                                    <h2> Lise Bilgisi</h2>
                                    <OkulBilgisi  {...this.state.OkulKontrol} parentCallback={this.callbackFunctionLise} />

                                </div>
                                <div className={this.state.egitim  > 3 ? 'okulBilgisi' : 'divDisplayNone'} >
                                    <h2>Üniversite Bilgisi</h2>
                                    <YuksekOkulBilgisi {...this.state.OkulKontrol} parentCallback={this.callbackFunctionLisans} />
                                </div>
                                <div className={this.state.egitim  > 4 ? 'okulBilgisi' : 'divDisplayNone'}>
                                    <h2>Yüksek Lisans Bilgisi</h2>
                                    <YuksekOkulBilgisi  {...this.state.OkulKontrol} parentCallback={this.callbackFunctionYuksekLisans} />
                                </div>
                                <div className={this.state.egitim > 5 ? 'okulBilgisi' : 'divDisplayNone'} >
                                    <h2>Doktora Bilgisi</h2>
                                    <YuksekOkulBilgisi {...this.state.OkulKontrol} parentCallback={this.callbackFunctionDoktora} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-md-12"></div>
                <div className="p-col-12 p-md-8"></div>
                <div className="p-col-12 p-md-2">
                    <Button id="kaydet" label="Kaydet" icon="pi pi-check" iconPos="left" className="p-button-success" onClick={() => this.sendData()} />
                </div>
            </div>

        );
    }
}