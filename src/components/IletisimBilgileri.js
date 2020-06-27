import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';


export class IletisimBilgileri extends Component {
    constructor() {
        super();
        this.state = {
          
        };


    };

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
                            value={this.state.inputtextValue}
                            onChange={(e) =>
                                this.setState({ inputtextValue: e.target.value })
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
                            value={this.state.inputtextValue}
                            onChange={(e) =>
                                this.setState({ inputtextValue: e.target.value })
                            }
                        />
                        <label htmlFor="float-input">Cadde</label>
                    </span>
                </div>
                <div className="p-col-12 p-md-8">
                    <h3>Dropdown</h3>
                    <span className="p-float-label">
                        <Dropdown id="float-dropdown" value={this.state.city} options={this.cities} ariaLabel="Test" onChange={this.onCityChange} optionLabel="name" />
                        <label htmlFor="float-dropdown">Select City</label>
                    </span>
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