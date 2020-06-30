import React, { Component } from 'react';
import '../layout/sass/personelKayit.scss';
import { OkulBilgisi } from './OkulBilgisi';
import { YuksekOkulBilgisi } from './YuksekOkulBilgisi'


export class EgitimSeviyeleri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            okulSeviyesi: 'İlköğretim Bilgisi',
            IlkOgretimBilgisi: "",
            OrtaOgretimBilgisi: "",
            LiseBilgisi: "",
            LisansBilgisi: "",
            YLisansBilgisi: "",
            DoktoraBilgisi: ""
        };
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
    render() {
        const egitimSeviyesi = Number(this.props[0]);
        console.log(egitimSeviyesi);
        return (
            <div className="p-grid">
                <div className="p-col-12 ">
                    <div className="card">

                        <div className={egitimSeviyesi > 0 ? 'okulBilgisi' : 'divDisplayNone'}>
                            <h2>İlköğretim Bilgisi</h2>
                            <OkulBilgisi parentCallback={this.callbackFunctionIlk} />
                        </div>
                        <div className={egitimSeviyesi > 1 ? 'okulBilgisi' : 'divDisplayNone'} >
                            <h2> Orta Öğretim Bilgisi</h2>
                            <OkulBilgisi parentCallback={this.callbackFunctionOrta} />

                        </div>
                        <div className={egitimSeviyesi > 2 ? 'okulBilgisi' : 'divDisplayNone'} >
                            <h2> Lise Bilgisi</h2>
                            <OkulBilgisi parentCallback={this.callbackFunctionLise} />

                        </div>
                        <div className={egitimSeviyesi > 3 ? 'okulBilgisi' : 'divDisplayNone'} >
                            <h2>Üniversite Bilgisi</h2>
                            <YuksekOkulBilgisi parentCallback={this.callbackFunctionLisans} />
                        </div>
                        <div className={egitimSeviyesi > 4 ? 'okulBilgisi' : 'divDisplayNone'}>
                            <h2>Yüksek Lisans Bilgisi</h2>
                            <YuksekOkulBilgisi parentCallback={this.callbackFunctionYuksekLisans} />
                        </div>
                        <div className={egitimSeviyesi > 5 ? 'okulBilgisi' : 'divDisplayNone'} >
                            <h2>Doktora Bilgisi</h2>
                            <YuksekOkulBilgisi parentCallback={this.callbackFunctionDoktora} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}











