import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { Dropdown } from 'primereact/dropdown';
import { IlService } from '../service/IlService';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import validator from 'validator';

export class IletisimBilgileri extends Component {
    constructor() {
        super();
        this.state = {
            il: '0',
            ilce: "",
            SokakIsmi: "",
            CaddeIsmi: "",
            adres: "",
            telefon: "",
            Email: "",
            iller: [],
            reqClassIl: "divDisplayNone",
            reqClassIlce: "divDisplayNone",
            reqClassCadde: "divDisplayNone",
            reqClassMail: "divDisplayNone",
            reqClassSokak: "divDisplayNone",
            reqClassTelefon: "divDisplayNone"

        };
        this.cities = [
            { name: 'İstanbul', value: 'IST' },
            { name: 'Ankara', value: 'ANK' },
        ];

        this.onIlChange = this.onIlChange.bind(this);
        this.ilservice = new IlService();

    };
    onIlChange(e) {
        this.setState({ il: e.value,reqClassIl: e.value === "0" ? "" : "divDisplayNone" });
    }
    componentDidMount() {
        this.ilservice.getIller().then(data => this.setState({ iller: data }));
    }
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        if (event.target.name === "ilce") {
            this.setState({ reqClassIlce: event.target.value.length > 0 ? "divDisplayNone" : "" })
        }
        else if (event.target.name === "CaddeIsmi") {
            this.setState({ reqClassCadde: event.target.value.length < 1 ? "" : "divDisplayNone" })
        }
        else if (event.target.name === "SokakIsmi") {
            this.setState({ reqClassSokak: event.target.value.length < 1 ? "" : "divDisplayNone" })
        }
        else if (event.target.name === "Email") {
            this.setState({ reqClassMail: validator.isEmail(this.state.Email) ? "divDisplayNone" : "" })
        }
        else if (event.target.name === "telefon") {
            this.setState({ reqClassTelefon:event.target.value.length < 1 ? "" : "divDisplayNone" })
        }
    }
    handleValidation() {
        let validate = true;
        if (this.state.ilce.length < 1 || this.state.CaddeIsmi.length < 1 || this.state.SokakIsmi.length < 1 || !validator.isEmail(this.state.Email) ||this.state.telefon.length < 1 )
            validate = false

        return validate;

    }
    sendData() {
        this.setState({
            reqClassIl: this.state.il === "0" ? "" : "divDisplayNone",
            reqClassIlce: this.state.ilce.length < 1 ? "" : "divDisplayNone",
            reqClassCadde: this.state.CaddeIsmi.length < 1 ? "" : "divDisplayNone",
            reqClassSokak: this.state.SokakIsmi.length < 1 ? "" : "divDisplayNone",
            reqClassMail: validator.isEmail(this.state.Email) ? "divDisplayNone" : "",
            reqClassTelefon: this.state.telefon.length < 1 ? "" : "divDisplayNone",

        });

        if (this.handleValidation()) {
            this.props.parentCallback(this.state);
        }
        else {
            console.log("validate");
        }


    }
    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-4">
                    <h3>İl</h3>
                    <Dropdown value={this.state.il} key={this.state.iller.value} options={this.state.iller} onChange={this.onIlChange} style={{ width: '12em' }}
                        filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
                    <div className={this.state.reqClassIl} >
                        <Message severity="error" text="İl Alanı Boş Geçilemez" />
                    </div>
                </div>
                <div className="p-col-12 p-md-4">
                    <h3>İlçe</h3>
                    <span className="p-float-label">
                        <InputText
                            id="float-input"
                            type="text"
                            size={30}
                            name="ilce"
                            value={this.state.ilce}
                            onChange={(e) => this.handleInputChange(e)}
                            onClick={(e) => this.handleInputChange(e)}
                        />
                        <label htmlFor="float-input">İlçe</label>
                    </span>
                    <div className={this.state.reqClassIlce} >
                        <Message severity="error" text="İlçe Alanı Boş Geçilemez" />
                    </div>
                </div>
                <div className="p-col-12 p-md-4">
                    <h3>Cadde</h3>
                    <span className="p-float-label">
                        <InputText
                            id="float-input"
                            type="text"
                            size={30}
                            name="CaddeIsmi"
                            value={this.state.CaddeIsmi}
                            onChange={(e) => this.handleInputChange(e)}
                            onClick={(e) => this.handleInputChange(e)}
                        />
                        <label htmlFor="float-input">Cadde</label>
                    </span>
                    <div className={this.state.reqClassCadde} >
                        <Message severity="error" text="Cadde Alanı Boş Geçilemez" />
                    </div>
                </div>
                <div className="p-col-12 p-md-4">
                    <h3>Sokak</h3>
                    <span className="p-float-label">
                        <InputText
                            id="float-input"
                            type="text"
                            size={30}
                            name="SokakIsmi"
                            value={this.state.SokakIsmi}
                            onChange={(e) => this.handleInputChange(e)}
                            onClick={(e) => this.handleInputChange(e)}
                        />
                        <label htmlFor="float-input">Sokak</label>
                    </span>
                    <div className={this.state.reqClassSokak} >
                        <Message severity="error" text="Sokak Alanı Boş Geçilemez" />
                    </div>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Email</h3>
                    <span className="p-float-label">
                        <InputText
                            id="float-input"
                            type="email"
                            size={30}
                            name="Email"
                            value={this.state.Email}
                            onChange={(e) => this.handleInputChange(e)}
                            onClick={(e) => this.handleInputChange(e)}
                        />
                        <label htmlFor="float-input">Email</label>
                    </span>
                    <div className={this.state.reqClassMail} >
                        <Message severity="error" text="Email Alanı uygun bir şekilde girilmelidir" />
                    </div>
                </div>

                <div className="p-col-12 p-md-4">
                    <h3>Telefon Numarası</h3>
                    <span className="p-float-label">
                        <InputMask id="float-mask" mask="5999999999" name="telefon" value={this.state.telefon} onChange={(e) => this.setState({ telefon: e.value })} onClick={(e) => this.handleInputChange(e)}/>
                        <label htmlFor="float-mask">599999999</label>
                    </span>
                    <div className={this.state.reqClassTelefon} >
                        <Message severity="error" text="Telefon Numarası Alanı Boş Geçilemez" />
                    </div>
                </div>
                <div className="p-col-12 p-md-4">
                    <h3>Adres Bilgisi </h3>
                    <span className="p-float-label">
                        <InputTextarea
                            id="float-textarea"
                            name="adres"
                            value={this.state.adres}
                            onChange={(e) => this.handleInputChange(e)}
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