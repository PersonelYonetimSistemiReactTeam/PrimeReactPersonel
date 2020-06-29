import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';
import { IlService } from '../service/IlService';


export class IletisimBilgileri extends Component {
    constructor() {
        super();
        this.state = {
            il: '6',
            iller: []

          
        };
        this.cities = [
            { name: 'İstanbul', value: 'IST' },
            { name: 'Ankara', value: 'ANK' },
          ];

          this.onCityChange = this.onCityChange.bind(this);
          this.ilservice = new IlService();

    };
    onCityChange(e) {
        this.setState({ city: e.value });
    }
    componentDidMount() {
        this.ilservice.getIller().then(data => this.setState({ iller: data }));
    }
    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-8">
                    <h3>Sokak</h3>
                    <span className="p-float-label">
                        <InputText
                            id="float-input"
                            type="text"
                            size={30}
                            value={this.state.SokakIsmi}
                            onChange={(e) =>
                                this.setState({ SokakIsmi: e.target.value })
                            }
                        />
                        <label htmlFor="float-input">Sokak</label>
                    </span>
                </div>
                <div className="p-col-12 p-md-8">
                    <h3>Cadde</h3>
                    <span className="p-float-label">
                        <InputText
                            id="float-input"
                            type="text"
                            size={30}
                            value={this.state.CaddeIsmi}
                            onChange={(e) =>
                                this.setState({ CaddeIsmi: e.target.value })
                            }
                        />
                        <label htmlFor="float-input">Cadde</label>
                    </span>
                </div>
                <div className="p-col-12 p-md-8">
                <h3>İl Seçiniz</h3>
                <Dropdown value={this.state.il} key={this.state.iller.value} options={this.state.iller} onChange={this.onIlChange} style={{ width: '12em' }}
                                    filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
                 
                </div>

                <div className="p-col-12 p-md-8">
                    <h3>Telefon Numarası</h3>
                    <span className="p-float-label">
                        <InputMask id="float-mask" mask="5999999999" value={this.state.maskValue} onChange={(e) => this.setState({ maskValue: e.value })} />
                        <label htmlFor="float-mask">599999999</label>
                    </span>
                </div>
                <div className="p-col-12 p-md-8">
                    <h3>Adres Bilgisi </h3>
                    <span className="p-float-label">
                        <InputTextarea
                            id="float-textarea"
                            value={this.state.textareaValue}
                            onChange={(e) =>
                                this.setState({ textareaValue: e.target.value })
                            }
                            rows={5}
                            cols={30}
                        />
                        <label htmlFor="float-textarea">Adres</label>
                    </span>
                </div>
             </div>
            
        );
    }
}