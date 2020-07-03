import React, { useState,useEffect } from 'react';
import EgitimBilgileri  from './EgitimBilgileri';
import  KimlikBilgileri  from './KimlikBilgileri';
import IletisimBilgileri  from './IletisimBilgileri';
import IsBilgileri from './IsBilgileri';
import 'primeicons/primeicons.css';
import { Steps } from 'primereact/steps';
import { IlService } from '../service/IlService';



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
  const [ilList, setIlList] = useState({});

  useEffect(() => {    
      const ilService = new IlService();
      ilService.getIller().then(
        data => setIlList(data));

  }, []);

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
             <EgitimBilgileri egitimBilgisi={personel.egitim} kimlikBilgisi={personel.kimlikBilgisi} ilList={[ilList]} next={() => {setSelectedIndex(selectedIndex+1)}} prev={() => {setSelectedIndex(selectedIndex-1)}} />
            }
            {selectedIndex === 2 && <IsBilgileri isBilgisi={personel.is} egitimBilgisi={personel.egitimBilgisi}  next={() => {setSelectedIndex(selectedIndex+1)}} prev={() => {setSelectedIndex(selectedIndex-1)}} />}
            {selectedIndex === 3 && <IletisimBilgileri iletisimBilgisi={personel.iletisim} isBilgisi={personel.isBilgisi} save={() => {setSelectedIndex(selectedIndex+1)}} prev={() => {setSelectedIndex(selectedIndex-1)}}/>}
          </div>
       </div>
 );
};  
export default PersonelKayit;