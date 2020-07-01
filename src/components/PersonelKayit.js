import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { EgitimBilgileri } from './EgitimBilgileri';
import { KimlikBilgileri } from './KimlikBilgileri';
import { IletisimBilgileri } from './IletisimBilgileri';
import {IsBilgileri} from './IsBilgileri';

import 'primeicons/primeicons.css';
import { Steps } from 'primereact/steps';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';


export class PersonelKayit extends Component {
  constructor() {
    super();
    this.state = {
      kimlik: "",
      ogrenim: "",
      iletisim: "",
      selectedIndex: 0,
      kimlikSave: "0",
      ogrenimSave: "0",
      isSave: "0",
      iletisimSave: "0",
      is:"",
      isSave:"0"

    };
    this.callbackFunctionKimlik = this.callbackFunctionKimlik.bind(this)
    this.callbackFunctionOgrenim = this.callbackFunctionOgrenim.bind(this)
    this.callbackFunctionIletisim = this.callbackFunctionIletisim.bind(this)
    this.callbackFunctionIs = this.callbackFunctionIs.bind(this)

    this.showError = this.showError.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = [
      {
        label: 'Kimlik Bilgileri'
      },
      {
        label: 'Öğrenim Bilgileri',
        command: (event) => {
          this.growl.show({ severity: 'info', detail: event.item.label });
        },
        content: "dasdsad"

      },
      {
        label: 'İş bilgileri',
        command: (event) => {
          this.growl.show({ severity: 'info', detail: event.item.label });
        }
      },
      {
        label: 'İletişim Bilgileri',
        command: (event) => {
          this.growl.show({ severity: 'info', detail: event.item.label });
        }
      }
    ];

  }
  showError() {
    this.growl.show({ severity: 'error', summary: 'Lütfen Zorunlu Alanları Doldurunuz.', detail: '' });
  }
  next = () => {
    if (this.state.selectedIndex === 0) {
      this.setState({ kimlikSave: "1" });
    }
    else if(this.state.selectedIndex === 1)
    {
      this.setState({ ogrenimSave: "1" });
    }
    else if(this.state.selectedIndex === 2)
    {
      this.setState({ isSave: "1" });
    }
    else if(this.state.selectedIndex === 3)
    {
      this.setState({ iletisimSave: "1" });

    }
  };
  prev = () => {
    const selectedIndex = this.state.selectedIndex - 1;
    this.setState({ selectedIndex });
  };

  async callbackFunctionKimlik(childData, validate) {
    if (validate === true) {
      await this.setState({ kimlik: childData, kimlikSave: "0"});
      const selectedIndex = this.state.selectedIndex + 1;
      await this.setState({ selectedIndex });
    }
    else {
      this.setState({ kimlikSave: "0" });
      this.showError();
    }
  }
  async callbackFunctionIs(childData, validate) {
    if (validate === true) {
      await this.setState({ is: childData, isSave: "0"});
      const selectedIndex = this.state.selectedIndex + 1;
      await this.setState({ selectedIndex });
    }
    else {
      this.setState({ isSave: "0" });
      this.showError();
    }
  }
  async callbackFunctionOgrenim(childData, validate) {
    if (validate === true) {
      if(this.state.ogrenim === ""){
        const selectedIndex = this.state.selectedIndex + 1;
        await this.setState({ selectedIndex});
      }      
    await this.setState({ ogrenim: childData,ogrenimSave: "0"  });  
    console.log(this.state.ogrenim);
    }
    else {
      this.setState({ ogrenimSave: "0" });
      this.showError();
    }
  }
  async callbackFunctionIletisim(childData, validate) {
    await this.setState({ iletisim: childData });

    console.log(this.state.ogrenim)
    console.log(this.state.iletisim)
    console.log(this.state.is)

  }


  render() {
    const { selectedIndex } = this.state;
    return (

      <div className="p-grid">

        <div className="p-col-12">
          <div className="card">
            <h1>Personel Kayıt</h1>
            <div>
              <Growl ref={(el) => { this.growl = el }}></Growl>
              <Steps model={this.items} activeIndex={this.state.selectedIndex} onSelect={(e) => this.setState({ selectedIndex: e.index })} />
              <div className={this.state.selectedIndex === 0 ? '' : 'divDisplayNone'}>
                <KimlikBilgileri {...this.state.kimlikSave} parentCallback={this.callbackFunctionKimlik} />
              </div>
              <div className={this.state.selectedIndex === 1 ? '' : 'divDisplayNone'}>
                <EgitimBilgileri {...this.state.ogrenimSave} parentCallback={this.callbackFunctionOgrenim} />
              </div>
              <div className={this.state.selectedIndex === 2 ? '' : 'divDisplayNone'}>
              <IsBilgileri  {...this.state.isSave} parentCallback={this.callbackFunctionIs} />
              </div>
              <div className={this.state.selectedIndex === 3 ? '' : 'divDisplayNone'} >
                <IletisimBilgileri parentCallback={this.callbackFunctionIletisim} />
              </div>
            </div>

            <div className="steps-action">
              {selectedIndex > 0 && (
                <Button label="Geri" icon="pi pi-angle-left" onClick={() => this.prev()}>
                </Button>
              )}
              {selectedIndex < 3 && (
                <Button label="İleri" style={{ marginLeft: 8 }} icon="pi pi-angle-right" onClick={() => this.next()}>
                </Button>
              )}
              {selectedIndex === 3 && (
                <Button id="kaydet" label="Kaydet" icon="pi pi-check" iconPos="left" className="p-button-success" onClick={() => this.sendData()} />

              )}
            </div>
          </div>

        </div>
      </div>
    )
  }

}
