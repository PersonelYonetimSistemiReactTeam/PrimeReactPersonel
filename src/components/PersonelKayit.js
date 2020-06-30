import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { EgitimBilgileri } from './EgitimBilgileri';
import { KimlikBilgileri } from './KimlikBilgileri';
import { IletisimBilgileri } from './IletisimBilgileri';
import 'primeicons/primeicons.css';

export class PersonelKayit extends Component {
  constructor() {
    super();
    this.state = {
      kimlik: "",
      ogrenim: "",
      iletisim: "",
      activeTab: 0,
      selectedIndex:0
    };
    this.callbackFunctionKimlik = this.callbackFunctionKimlik.bind(this)
    this.callbackFunctionOgrenim = this.callbackFunctionOgrenim.bind(this)
    this.callbackFunctionIletisim = this.callbackFunctionIletisim.bind(this)
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
    // console.log(this.state.kimlik.ad,this.state.kimlik.soyad,
    //   this.state.kimlik.tc,this.state.kimlik.cinsiyet,this.state.kimlik.babaadi,
    //   this.state.kimlik.anneadi,this.state.kimlik.medeniDurum,this.state.kimlik.uyruk,
    //   this.state.kimlik.il,this.state.kimlik.ilce,this.state.kimlik.mahallekoy,
    //   this.state.kimlik.ciltno,this.state.kimlik.ailesirano,this.state.kimlik.sirano,
    //   this.state.kimlik.kayitno,this.state.kimlik.serino,this.state.kimlik.kangrubu.name,this.state.kimlik.ibsoyad,
    //   this.state.kimlik.verilistarihi)
  }
  async callbackFunctionOgrenim(childData) {
    await this.setState({ ogrenim: childData, selectedIndex: 2 });
  }
  async callbackFunctionIletisim(childData) {
    await this.setState({ iletisim: childData });

    console.log(this.state.ogrenim)
    console.log(this.state.iletisim)
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
          </TabView>
        </div>
      </div>
    </div>
  )
}

}
