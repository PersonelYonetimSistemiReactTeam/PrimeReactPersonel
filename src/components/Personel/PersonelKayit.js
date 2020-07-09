import React, { useState, useEffect, useRef } from 'react';
import EgitimBilgileri from './PersonelKayıtComponent/EgitimBilgileri';
import KimlikBilgileri from './PersonelKayıtComponent/KimlikBilgileri';
import IletisimBilgileri from './PersonelKayıtComponent/IletisimBilgileri';
import IsBilgileri from './PersonelKayıtComponent/IsBilgileri';
import { Steps } from 'primereact/steps';
import { IlService } from '../../service/IlService';
import { PersonelService } from '../../service/PersonelService/PersonelService';
import { Growl } from 'primereact/growl';


const PersonelKayit = (props) => {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [ilList, setIlList] = useState({});
  const [personel, setPersonel] = useState({
    kimlik: {},
    egitim: {},
    is: {},
    iletisim: {}
  });
  
  let growl = useRef(null);
  const ilService = new IlService();
  const personelService = new PersonelService();
  const showSuccess = (data) => {
    growl.current.show({ severity: 'success', summary: 'Başarılı', detail: data });
  }
  const showError = () => {
    growl.current.show({ severity: 'error', summary: 'Hata', detail: 'Personel Kaydetme Başarısız' });
  }
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
    personelService.postPersonel(personel).then(
      data => data.message === "Kişi Kaydedildi" ? showSuccess(data.message) : showError());
  }

  useEffect(() => {
    ilService.getIller().then(
      data => setIlList(data));
    setSelectedIndex(0);

  }, []);

  useEffect(() => {    
    const xx = {...props.guncelleme};
    setPersonel(xx);
    setSelectedIndex(0);
  }, [props.guncelleme]);


  return (

    <div className="card">
      <Growl ref={growl} />
      <div>
        <Steps model={items} activeIndex={selectedIndex} onSelect={(e) => { setSelectedIndex(e.index) }} />
        <br />
        {selectedIndex === 0 && <KimlikBilgileri kimlikBilgisi={personel.kimlik} next={(kimlik) => {
          setPersonel({ ...personel, kimlik: kimlik })
          setSelectedIndex(selectedIndex + 1)
        }} />}
        {selectedIndex === 1 &&
          <EgitimBilgileri egitimBilgisi={personel.egitim} next={(egitim) => {
            setPersonel({ ...personel, egitim: egitim });
            setSelectedIndex(selectedIndex + 1);
          }} prev={(egitim) => {
            setPersonel({ ...personel, egitim: egitim });
            setSelectedIndex(selectedIndex - 1);
          }} />
        }
        {selectedIndex === 2 && <IsBilgileri isBilgisi={personel.is} ilList={ilList} next={(is) => {
          setPersonel({ ...personel, is: is })
          setSelectedIndex(selectedIndex + 1)
        }} prev={(is) => {
          setPersonel({ ...personel, is: is });
          setSelectedIndex(selectedIndex - 1);
        }
        } />}
        {selectedIndex === 3 && <IletisimBilgileri iletisimBilgileri={personel.iletisim} ilList={ilList} save={(iletisimBilgileri) => {
          setPersonel({ ...personel, iletisim: iletisimBilgileri })
          save()
        }}
          prev={(iletisim) => {
            setPersonel({ ...personel, iletisim: iletisim });
            setSelectedIndex(selectedIndex - 1);
          }} />}
      </div>
    </div>
  );
};
export default PersonelKayit;