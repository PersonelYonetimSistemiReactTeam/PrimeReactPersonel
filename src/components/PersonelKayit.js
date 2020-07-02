import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { EgitimBilgileri } from './EgitimBilgileri';
import { KimlikBilgileri } from './KimlikBilgileri';
import { IletisimBilgileri } from './IletisimBilgileri';
import { IsBilgileri } from './IsBilgileri';
import PersonelConsumer from '../context';

import 'primeicons/primeicons.css';
import { Steps } from 'primereact/steps';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';


export class PersonelKayit extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0, 
      dispach:null   
    };

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
    const selectedIndex = this.state.selectedIndex + 1;
    this.setState({ selectedIndex });
    this.state.dispach({type:"validate",payload: false});

  };
  prev = () => {
    this.state.dispach({type:"validate",payload: true});
    const selectedIndex = this.state.selectedIndex - 1;
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <PersonelConsumer>{value => {
        const { kimlik } = value;
        const { ogrenim } = value;
        const { is } = value;
        const { iletisim } = value;
        const { validate } = value;
        const selected  = this.state.selectedIndex;
        const { dispatch } = value;
        if (this.state.dispach === null)
          this.setState({ dispach: dispatch })
        return (
          <div className="p-grid">
            <div className="p-col-12">
              <div className="card">
                <h1>Personel Kayıt</h1>
                <div>
                  <Growl ref={(el) => { this.growl = el }}></Growl>
                  <Steps model={this.items} activeIndex={this.state.selectedIndex} onSelect={(e) => this.setState({ selectedIndex: e.index })} />
                  <div className={this.state.selectedIndex === 0 ? '' : 'divDisplayNone'}>
                    <KimlikBilgileri  />
                    {console.log(kimlik,iletisim,ogrenim,is)}
                  </div>
                  <div className={this.state.selectedIndex === 1 ? '' : 'divDisplayNone'}>
                    <EgitimBilgileri />
                  </div>
                  <div className={this.state.selectedIndex === 2 ? '' : 'divDisplayNone'}>
                    <IsBilgileri  />
                  </div>
                  <div className={this.state.selectedIndex === 3 ? '' : 'divDisplayNone'} >
                    <IletisimBilgileri />
                  </div>
                </div>

                <div className="steps-action">
                  {selected > 0 && (
                    <Button label="Geri" icon="pi pi-angle-left" onClick={() => this.prev()}>
                    </Button>
                  )}
                  {selected < 3 && (
                    <Button label="İleri" style={{ marginLeft: 8 }} icon="pi pi-angle-right" onClick={validate===true ? () => this.next() : this.showError}>
                    </Button>
                  )}
                  {selected === 3 && (
                    <Button id="kaydet" label="Kaydet" icon="pi pi-check" iconPos="left" className="p-button-success" onClick={() => this.sendData()} />

                  )}
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
