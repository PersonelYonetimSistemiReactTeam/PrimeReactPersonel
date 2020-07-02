import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Message } from 'primereact/message';
import validator from 'validator';
import { IlService } from '../service/IlService';
import '../layout/sass/personelKayit.scss';
import PersonelConsumer from '../context';

export class IsBilgileri extends Component {
  constructor() {
    super();
    this.state = {
      unvan: "",
      sirket: "",
      il: '6',
      iller: [],
      baglioldugumudurluk: "",
      baglioldugumudur: "",
      kidem: "",
      reqClassUnvan: "divDisplayNone",
      reqClassSirket: "divDisplayNone",
      reqClassMudurluk: "divDisplayNone",
      reqClassMudur: "divDisplayNone",
      reqClassKidem: "divDisplayNone",
      validate:false,
      dispach:null
    };
    this.sirketlist = [
      { name: 'Limak Teknoloji', code: 'LT' },
      { name: 'Limak Enerji', code: 'LE' },
      { name: 'Limak Çimento', code: 'LC' },
      { name: 'Limak İnşaat', code: 'LI' },
      { name: 'Limak Turizm', code: 'LI' },
      { name: 'Limak Gıda', code: 'LI' },
      { name: 'Limak Liman', code: 'LI' }
    ];
    this.onIlChange = this.onIlChange.bind(this);
    this.onsirketchange = this.onsirketchange.bind(this);
    this.ilservice = new IlService();
  };

  onsirketchange(e) {
    this.setState({ sirket: e.value });
  }

  onIlChange(e) {
    this.setState({ il: e.value });
  }
  componentDidMount() {
    this.ilservice.getIller().then(data => this.setState({ iller: data }));
  }
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    if (event.target.name === "unvan") {
      this.setState({ reqClassUnvan: event.target.value.length < 1 ? "" : "divDisplayNone" ,validate:event.target.value.length < 1 ? false :true})
    }
    if (event.target.name === "baglioldugumudurluk") {
      this.setState({ reqClassMudurluk: event.target.value.length < 1 ? "" : "divDisplayNone",validate:event.target.value.length < 1 ? false :true })
    }
    if (event.target.name === "baglioldugumudur") {
      this.setState({ reqClassMudur: event.target.value.length < 1 ? "" : "divDisplayNone" ,validate:event.target.value.length < 1 ? false :true})
    }
    if (event.target.name === "kidem") {
      this.setState({ reqClassKidem: event.target.value.length < 1 ? "" : "divDisplayNone" ,validate:event.target.value.length < 1 ? false :true})
    }
  }
  shouldComponentUpdate(nextProps, nextState)
  {
    return this.state !== nextState ?  true: false;
  }
  componentWillUpdate(nextProps, nextState)
  {
    if(this.state.dispach !== null)
    {
      this.state.dispach({type:"is",payload: nextState});
    }
  }
  render() {
    return (
      <PersonelConsumer>{value => {
        const { dispatch } = value;
        if (this.state.dispach === null)
          this.setState({ dispach: dispatch })
        return (
          <div className="p-grid p-fluid">
            <div className="p-col-12 p-md-4">
              <h3>Ünvan*</h3>
              <span className="p-float-label">
                <InputText name="unvan" type="text" size={30} value={this.state.unvan} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
                <label htmlFor="float-input">Ünvan</label>
              </span>
              <div className={this.state.reqClassUnvan}>
                <Message severity="error" text="Unvan alanı boş geçilemez!" />
              </div>
              <h3>Bağlı Olduğu Müdürlük*</h3>
              <span className="p-float-label">
                <InputText name="baglioldugumudurluk" type="text" size={30} value={this.state.baglioldugumudurluk} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
                <label htmlFor="float-input">Bağlı Olduğu Müdürlük</label>
              </span>
              <div className={this.state.reqClassMudurluk} >
                <Message severity="error" text="Bağlı olduğu müdürlük alanı boş geçilemez!" />
              </div>
              <h3>Bağlı Olduğu Müdür/Amir*</h3>
              <span className="p-float-label">
                <InputText name="baglioldugumudur" type="text" size={30} value={this.state.baglioldugumudur} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
                <label htmlFor="float-input">Bağlı Olduğu Müdür/Amir</label>
              </span>
              <div className={this.state.reqClassMudur} >
                <Message severity="error" text="Bağlı olduğu müdür/amir alanı boş geçilemez!" />
              </div>
              <h3>Kıdem*</h3>
              <span className="p-float-label">
                <InputText name="kidem" type="text" size={30} value={this.state.kidem} onChange={(e) => this.handleInputChange(e)} onClick={(e) => this.handleInputChange(e)} />
                <label htmlFor="float-input">Kıdem</label>
              </span>
              <div className={this.state.reqClassKidem} >
                <Message severity="error" text="Kıdem alanı boş geçilemez!" />
              </div>
              <h3>Şirket*</h3>
              <div className="p-col-12 p-md-12">
                <Dropdown value={this.state.sirket} options={this.sirketlist} onChange={this.onsirketchange} optionLabel="name" style={{ width: '12em' }} />
              </div>
              <div className="p-col-12 p-md-">
                <h3>Çalıştığı İl</h3>
                <Dropdown value={this.state.il} key={this.state.iller.value} options={this.state.iller} onChange={this.onIlChange} style={{ width: '12em' }}
                  filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
              </div>
            </div>
          </div>

        );
      }}
      </PersonelConsumer>
    )
  }
}