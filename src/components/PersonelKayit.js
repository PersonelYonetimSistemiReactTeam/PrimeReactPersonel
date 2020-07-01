import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { EgitimBilgileri } from './EgitimBilgileri';
import { KimlikBilgileri } from './KimlikBilgileri';
import { IletisimBilgileri } from './IletisimBilgileri';
import {IsBilgileri} from './IsBilgileri';

import 'primeicons/primeicons.css';

export class PersonelKayit extends Component {
  constructor() {
    super();
    this.state = {
      kimlik: "",
      ogrenim: "",
      iletisim: "",
      is:"",
      activeTab: 0,
      selectedIndex:0
    };
    this.callbackFunctionKimlik = this.callbackFunctionKimlik.bind(this)
    this.callbackFunctionOgrenim = this.callbackFunctionOgrenim.bind(this)
    this.callbackFunctionIletisim = this.callbackFunctionIletisim.bind(this)
    this.callbackFunctionIs = this.callbackFunctionIs.bind(this)
    
    this.handleSelect = this.handleSelect.bind(this)

  }
  handleSelect = index => {
    this.setState({ selectedIndex: index });
  };

  handleButtonClick = () => {
    this.setState({ selectedIndex: 0 });
  };

  async callbackFunctionKimlik(childData) {
    await this.setState({ kimlik: childData, selectedIndex: 1 });

  }
  async callbackFunctionOgrenim(childData) {
    await this.setState({ ogrenim: childData, selectedIndex: 2 });
  }
  async callbackFunctionIs(childData) {
    await this.setState({ is: childData, selectedIndex: 3 });

  }
  async callbackFunctionIletisim(childData) {
    await this.setState({ iletisim: childData });

    console.log(this.state.ogrenim)
    console.log(this.state.iletisim)
    console.log(this.state.is)

  }


render() {
  return (

    <div className="p-grid">
      <div className="p-col-12">
        <div className="card">
          <h1>Personel Kayıt</h1>
          <TabView renderActiveOnly={true} activeIndex={this.state.selectedIndex} selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect} >
            <TabPanel  eventKey={1} header="Kimlik Bilgileri" leftIcon="pi pi-user-plus" >
              <KimlikBilgileri parentCallback={this.callbackFunctionKimlik} />
            </TabPanel>
            <TabPanel eventKey={2} header=" Öğrenim Bilgileri" leftIcon="pi pi-pencil" disabled={this.state.kimlik === "" ? true : this.state.kimlik.fields.ogrenimDurum}>
              <EgitimBilgileri parentCallback={this.callbackFunctionOgrenim} />
            </TabPanel>
            <TabPanel eventKey={3} header="İletişim Bilgileri" leftIcon="pi pi-comments" disabled={this.state.ogrenim === "" ? true : this.state.ogrenim.iletisimDurum}>
              <IletisimBilgileri parentCallback={this.callbackFunctionIletisim} />
            </TabPanel>
            <TabPanel eventKey={3} header="İş Bilgileri" leftIcon="pi pi-comments" disabled={this.state.iletisim === "" ? true : this.state.iletisim.iletisimDurum}>
              <IsBilgileri parentCallback={this.callbackFunctionIs} />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  )
}

}
