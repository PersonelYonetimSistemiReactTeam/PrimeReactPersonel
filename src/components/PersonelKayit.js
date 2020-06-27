import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { EgitimBilgileri } from './EgitimBilgileri'
import { KimlikBilgileri } from './KimlikBilgileri'
import { IletisimBilgileri } from './IletisimBilgileri'

export class PersonelKayit extends Component {
  render() {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <h1>Personel Kayıt</h1>
            <TabView renderActiveOnly={false}>
              <TabPanel header="Kimlik Bilgileri" leftIcon="pi pi-calendar">
                <KimlikBilgileri />
              </TabPanel>
              <TabPanel header=" Öğrenim Bilgileri" rightIcon="pi pi-user">
                <EgitimBilgileri />
              </TabPanel>
              <TabPanel header="İletişim Bilgileri" leftIcon="pi pi-search" rightIcon="pi pi-check">
                <IletisimBilgileri />
              </TabPanel>
            </TabView>
          </div>
        </div>

      </div>
    )
  }

}
