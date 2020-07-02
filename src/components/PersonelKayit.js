import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { EgitimBilgileri } from './EgitimBilgileri';
import  KimlikBilgileri  from './KimlikBilgileri';
import { IletisimBilgileri } from './IletisimBilgileri';
import { IsBilgileri } from './IsBilgileri';
import PersonelConsumer from '../context';

import 'primeicons/primeicons.css';
import { Steps } from 'primereact/steps';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';


const PersonelKayit = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [personel, setPersonel] = useState({
    kimlik:{},
    egitim:{},
    is:{},
    iletisim:{}
  });

  const items = [
    {
      label: 'Kimlik Bilgileri'
    },
    {
      label: 'Öğrenim Bilgileri',

    },
    {
      label: 'İş bilgileri',
    },
    {
      label: 'İletişim Bilgileri',
    }
  ];

  const save = () => {
    console.log({personel});
  }
  

  return (
    
        <div className="card">
          <h1>Personel Kayıt</h1>
          <div>
            <Steps model={items} activeIndex={selectedIndex} onSelect={(e) => {setSelectedIndex(e.index)}} />
            <br/>
            {selectedIndex === 0 && <KimlikBilgileri kimlikBilgisi={personel.kimlik} next={(kimlik) => {
              setPersonel({...personel, kimlik: kimlik})
              setSelectedIndex(selectedIndex+1)
            }} />}
            {selectedIndex === 1 && 
             <EgitimBilgileri egitimBilgisi={personel.egitim} next={() => {setSelectedIndex(selectedIndex+1)}} prev={() => {setSelectedIndex(selectedIndex-1)}} />
            }
            {selectedIndex === 2 && <IsBilgileri isBilgisi={personel.is} next={setSelectedIndex(selectedIndex+1)} prev={setSelectedIndex(selectedIndex-1)} />}
            {selectedIndex === 3 && <IletisimBilgileri iletisimBilgisi={personel.iletisim} save={save} prev={setSelectedIndex(selectedIndex-1)} />}
          </div>
          <div className="steps-action">
            {/* {selected < 3 && <Button label="İleri" style={{ marginLeft: 8 }} icon="pi pi-angle-right" onClick={validate === true ? () => this.next() : this.showError}/>}
            {selected === 3 && <Button id="kaydet" label="Kaydet" icon="pi pi-check" iconPos="left" className="p-button-success" onClick={() => this.sendData()} />} */}
          </div>
        </div>
 );
};  
export default PersonelKayit;