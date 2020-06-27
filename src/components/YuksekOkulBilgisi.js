import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { IlService } from '../service/IlService';
import { UniService } from '../service/UniService';
import '../layout/sass/personelKayit.scss';
import { Calendar } from 'primereact/calendar';


export class YuksekOkulBilgisi extends Component {
    constructor() {
        super();
        this.state = {
            okulAdi: null,
            mezuniyetYil: null,
            mezuniyetDurum: '0',
            il: '6',
            iller: [],
            uniList: [],
            notSistemleri: [],
            universite: '0',
            keyUni: 1,
            bastarih: null,
            sontarih: null,
            notSistemi: "0"
        };

        this.mezuniyetDurumlari = [
            { label: 'Seçiniz', value: '0' },
            { label: 'Mezun', value: '1' },
            { label: 'Devam', value: '2' },
            { label: 'Terk', value: '3' }
        ];
        this.notSistemleri = [
            { label: 'Seçiniz', value: '0' },
            { label: '4', value: '1' },
            { label: '5', value: '2' },
            { label: '10', value: '3' },
            { label: '100', value: '3' }
        ];

        this.onIlChange = this.onIlChange.bind(this);
        this.onUniChange = this.onUniChange.bind(this);
        this.OnNotSistemiChange = this.OnNotSistemiChange.bind(this);

        this.onMezuniyetDurumChange = this.onMezuniyetDurumChange.bind(this);
        this.ilservice = new IlService();
        this.uniservice = new UniService();


    };

    onUniChange(e) {
        this.setState({ universite: e.value });
    }
    onIlChange(e) {
        this.setState({ il: e.value });
    }
    OnNotSistemiChange(e) {
        this.setState({ notSistemi: e.value });

    }
    onMezuniyetDurumChange(e) {
        this.setState({ mezuniyetDurum: e.value });
    }
    componentDidMount() {
        this.ilservice.getIller().then(data => this.setState({ iller: data }));
        this.uniservice.getUniList().then(data => this.setState({ uniList: data }));

    }

    render() {
        const tr = {
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"]
        };
        return (
            <div className="p-grid">
                <div className="p-col-12 p-md-12">
                    <div className="okulBilgisi ">
                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4">
                                <h3>Üniversite</h3>
                                <Dropdown value={this.state.universite} key={this.state.uniList.value} options={this.state.uniList} onChange={this.onUniChange} style={{ width: '12em' }}
                                    filter={true} filterPlaceholder="Üniversite" filterBy="label,value" showClear={true} />
                            </div>
                            <div className="p-col-12 p-md-4">
                                <h3>Fakülte</h3>
                                <span className="p-float-label">
                                    <InputText id="ad" type="text" size={250} value={this.state.fakulte} onChange={(e) => this.setState({ fakulte: e.target.value })} />
                                    <label htmlFor="float-input">Fakülte</label>
                                </span>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <h3>Bölüm</h3>
                                <span className="p-float-label">
                                    <InputText id="ad" type="text" size={250} value={this.state.bolum} onChange={(e) => this.setState({ bolum: e.target.value })} />
                                    <label htmlFor="float-input">Bölüm</label>
                                </span>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <h3>Eğitim Dili</h3>
                                <span className="p-float-label">
                                    <InputText id="ad" type="text" size={250} value={this.state.egitimDili} onChange={(e) => this.setState({ egitimDili: e.target.value })} />
                                    <label htmlFor="float-input">Eğitim Dili</label>
                                </span>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <h3>Başlangıç Tarihi</h3>
                                <Calendar value={this.state.bastarih} onChange={(e) => this.setState({ bastarih: e.value })} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="1990:2030" locale={tr} />

                            </div>
                            <div className="p-col-12 p-md-4">
                                <h3>Mezuniyet Durumu</h3>
                                <Dropdown value={this.state.mezuniyetDurum} options={this.mezuniyetDurumlari} onChange={this.onMezuniyetDurumChange} style={{ width: '12em' }}
                                />
                            </div>
                            <div className={this.state.mezuniyetDurum == 1 ? "p-col-12 p-md-4" : "p-col-12 p-md-4 divDisplayNone"} >
                                <h3>Mezuniyet Tarihi</h3>
                                <Calendar value={this.state.sontarih} onChange={(e) => this.setState({ sontarih: e.value })} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="1990:2030" locale={tr}  />

                            </div>
                            <div className={this.state.mezuniyetDurum == 1 ? "p-col-12 p-md-4" : "p-col-12 p-md-4 divDisplayNone"}>
                                <h3>Not Ortalaması</h3>
                                <span className="p-float-label">
                                    <InputText id="ad" type="number" value={this.state.mezuniyetYil} onChange={(e) => this.setState({ mezuniyetYil: e.target.value })} />
                                    <label htmlFor="float-input">Not Ortalaması</label>
                                </span>
                            </div>
                            <div className={this.state.mezuniyetDurum == 1 ? "p-col-12 p-md-4" : "p-col-12 p-md-4 divDisplayNone"}>
                                <h3>Not Sistemi</h3>
                                <Dropdown value={this.state.notSistemi} options={this.notSistemleri} onChange={this.OnNotSistemiChange} style={{ width: '12em' }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}