import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { IlService } from '../service/IlService';
import '../layout/sass/personelKayit.scss';
import { Checkbox } from 'primereact/checkbox';


const OkulBilgisi = (props) => {
    const [okulBilgisi, setOkul] = useState({
            okulAdi: "",
            mezuniyetYil: "",
            mezuniyetDurum: '1',
            il: '6',
            checked: false,
            okulTipi: "",
            yurtdisi:false
        , ...props.okulBilgisi
    });

    const mezuniyetDurumlari = [
        { label: 'Seçiniz', value: '0' },
        { label: 'Mezun', value: '1' },
        { label: 'Devam', value: '2' },
        { label: 'Terk', value: '3' }
    ];
 

    const iller = Object.values({ ...props.ilList })
    const getKeyValue = (e) => {
        if (e.target) {
            if (e.target.type) {
                if (e.target.type === "checkbox")
                    return { key: e.target.name, value: e.target.checked };
                else
                    return { key: e.target.name, value: e.target.value };
            } else
                return { key: e.target.name, value: e.target.value };
        }
        return { key: null, value: null };
    };

    const onChange = (e) => {

        const { key, value } = getKeyValue(e);
        setOkul({ ...okulBilgisi, [key]: value });

    };

    return (
        <div className="p-grid">
            <div className="p-col-12 p-md-12">
                <div className="okulBilgisi ">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Okul Adı</h3>
                            <span className="p-float-label">
                                <InputText id="okulAdi" name ="okulAdi" type="text" size={250} value={okulBilgisi.okulAdi} onChange={onChange}  />
                                <label htmlFor="float-input">Okul Adı</label>
                            </span>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Mezuniyet Durumu</h3>
                            <Dropdown name="mezuniyetDurum" value={okulBilgisi.mezuniyetDurum} options={mezuniyetDurumlari} onChange={onChange}  style={{ width: '12em' }}
                                filter={true} filterPlaceholder="Mezuniyet Durumu" filterBy="label,value" showClear={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Mezuniyet Yılı</h3>
                            <span className="p-float-label">
                                <InputText id="MezuniyetYili" name="mezuniyetYil" type="number" min="1950" max="2020" value={okulBilgisi.mezuniyetYil} onChange={onChange}  />
                                <label htmlFor="float-input">Mezuniyet Yılı</label>
                            </span>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>İl Seçiniz</h3>
                            <Dropdown name="il" value={okulBilgisi.il} key={iller.value,iller.label} options={iller} onChange={onChange}  style={{ width: '12em' }}
                                filter={true} filterPlaceholder="İl" filterBy="label,value" showClear={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <br></br><br></br><br></br>
                            <label htmlFor="cb1" className="p-checkbox-label">Yurt Dışı  </label>
                            <Checkbox name ="yurtdisi" checked={okulBilgisi.yurtdisi} onChange={onChange} />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default OkulBilgisi