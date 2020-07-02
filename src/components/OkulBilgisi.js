import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { IlService } from '../service/IlService';
import '../layout/sass/personelKayit.scss';
import { Checkbox } from 'primereact/checkbox';
import PersonelConsumer from '../context';


export class OkulBilgisi extends Component {
    constructor() {
        super();
        this.state = {
            okulAdi: "",
            mezuniyetYil: "",
            mezuniyetDurum: '1',
            il: '6',
            iller: [],
            checked: false,
            okulTipi: "",
            dispach:null,
            validate:true
        };

        this.mezuniyetDurumlari = [
            { label: 'Seçiniz', value: '0' },
            { label: 'Mezun', value: '1' },
            { label: 'Devam', value: '2' },
            { label: 'Terk', value: '3' }
        ];


        this.onIlChange = this.onIlChange.bind(this);
        this.onMezuniyetDurumChange = this.onMezuniyetDurumChange.bind(this);
        this.ilservice = new IlService();

    };

    onIlChange(e) {
        this.setState({ il: e.value });
    }
    onMezuniyetDurumChange(e) {
        this.setState({ mezuniyetDurum: e.value });
    }
    componentDidMount() {
        this.ilservice.getIller().then(data => this.setState({ iller: data }));
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
        this.state.dispach({type:"validate",payload: true});          

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
                    <div className="p-grid">
                        <div className="p-col-12 p-md-12">
                            <div className="okulBilgisi ">
                                <div className="p-grid p-fluid">
                                    <div className="p-col-12 p-md-4">
                                        <h3>Okul Adı</h3>
                                        <span className="p-float-label">
                                            <InputText id="okulAdi" type="text" size={250} value={this.state.okulAdi} onChange={(e) => this.setState({ okulAdi: e.target.value })} />
                                            <label htmlFor="float-input">Okul Adı</label>
                                        </span>
                                    </div>
                                    <div className="p-col-12 p-md-4">
                                        <h3>Mezuniyet Durumu</h3>
                                        <Dropdown value={this.state.mezuniyetDurum} options={this.mezuniyetDurumlari} onChange={this.onMezuniyetDurumChange} style={{ width: '12em' }}
                                            filter={true} filterPlaceholder="Mezuniyet Durumu" filterBy="label,value" showClear={true} />
                                    </div>
                                    <div className="p-col-12 p-md-4">
                                        <h3>Mezuniyet Yılı</h3>
                                        <span className="p-float-label">
                                            <InputText id="MezuniyetYili" type="number" min="1950" max="2020" value={this.state.mezuniyetYil} onChange={(e) => this.setState({ mezuniyetYil: e.target.value })} />
                                            <label htmlFor="float-input">Mezuniyet Yılı</label>
                                        </span>
                                    </div>
                                    <div className="p-col-12 p-md-4">
                                        <h3>İl Seçiniz</h3>
                                        <Dropdown value={this.state.il} key={this.state.iller.value} options={this.state.iller} onChange={this.onIlChange} style={{ width: '12em' }}
                                            filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
                                    </div>
                                    <div className="p-col-12 p-md-4">
                                        <br></br><br></br><br></br>
                                        <label htmlFor="cb1" className="p-checkbox-label">Yurt Dışı  </label>
                                        <Checkbox checked={this.state.checked} onChange={e => this.setState({ checked: e.checked })} />

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