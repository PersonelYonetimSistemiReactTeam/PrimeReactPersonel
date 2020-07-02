import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import '../layout/sass/personelKayit.scss';
import { OkulBilgisi } from './OkulBilgisi';
import { YuksekOkulBilgisi } from './YuksekOkulBilgisi'
import PersonelConsumer from '../context';



export class EgitimBilgileri extends Component {
    constructor() {
        super();
        this.state = {
            egitim: '0',
            iletisimDurum: false,
            IlkOgretimBilgisi: "",
            OrtaOgretimBilgisi: "",
            LiseBilgisi: "",
            LisansBilgisi: "",
            YLisansBilgisi: "",
            DoktoraBilgisi: "",
            reqClassEgitimSeviyesi: "divDisplayNone",
            IlkOgretim: "1",
            OrtaOgretim: "2",
            Lise: "3",
            Lisans: "4",
            YLisans: "5",
            Doktora: "6",
            validate:false,
            dispach:null
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

    }
  
    onEgitimChange(e) {
        console.log(e);
        this.setState({ egitim: e.value, reqClassEgitimSeviyesi: e.value === "0" ? "" : "divDisplayNone",validate: e.value === "0" ? false :true});
    }
    shouldComponentUpdate(nextProps, nextState)
    {
      return this.state !== nextState ?  true: false;
    }
    componentWillUpdate(nextProps, nextState)
    {
      if(this.state.dispach !== null)
      {
        this.state.dispach({type:"ogrenim",payload: nextState});
      }
    }
  
    render() {
        return (
            <PersonelConsumer>{value => {
                const { dispatch } = value;
                const okulTip = this.props[0];
                if (this.state.dispach === null)
                    this.setState({ dispach: dispatch, okulTipi: okulTip })
                return (
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Eğitim Seviyesi *</h3>
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
                                            <OkulBilgisi {...this.state.IlkOgretim} />
                                        </div>
                                        <div className={this.state.egitim > 1 ? 'okulBilgisi' : 'divDisplayNone'} >
                                            <h2> Orta Öğretim Bilgisi</h2>
                                            <OkulBilgisi {...this.state.OrtaOgretim}  />

                                        </div>
                                        <div className={this.state.egitim > 2 ? 'okulBilgisi' : 'divDisplayNone'} >
                                            <h2> Lise Bilgisi</h2>
                                            <OkulBilgisi  {...this.state.Lise}  />

                                        </div>
                                        <div className={this.state.egitim > 3 ? 'okulBilgisi' : 'divDisplayNone'} >
                                            <h2>Üniversite Bilgisi</h2>
                                            <YuksekOkulBilgisi {...this.state.Lisans}  />
                                        </div>
                                        <div className={this.state.egitim > 4 ? 'okulBilgisi' : 'divDisplayNone'}>
                                            <h2>Yüksek Lisans Bilgisi</h2>
                                            <YuksekOkulBilgisi  {...this.state.YLisans}  />
                                        </div>
                                        <div className={this.state.egitim > 5 ? 'okulBilgisi' : 'divDisplayNone'} >
                                            <h2>Doktora Bilgisi</h2>
                                            <YuksekOkulBilgisi {...this.state.Doktora}  />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                );
            }}
            </PersonelConsumer>
        )
    }
}