import React, { useState,useEffect,useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import classNames from 'classnames';
import { Dialog } from 'primereact/dialog';
import PersonelKayit from './PersonelKayit';
import { PersonelService } from '../service/PersonelService';
import '../layout/sass/_grid.scss';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


const PersonelListesi = (props) => {

    const [selectedRepresentatives, setSelectedRepresentatives] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null)
    const [personel, setPersonel] = useState(null);
    const [personelBilgileri, setPersonelBilgileri] = useState(null);
    const [displayBasic, setdisplayBasic] = useState(false);
    const [displayDetay, setdisplayDetay] = useState(false);
    const [displayGuncelle, setdisplayGuncelle] = useState(false);
    const [secilenpersonel, setSecilenPersonel] = useState({
        kimlik: {},
        is: {},
        iletisim: {}
    });

 
    const personelService = new PersonelService();
    let dt = useRef(null);


    useEffect(() => {
        personelService.getPersonelSirketKimlikId().then(res => {
            setPersonelBilgileri(res)})
    }, []);

    const renderHeader = ()  => {
        return (
            <div>
                Personel Listesi
                <div className="p-datatable-globalfilter-container">
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Ara" />
                </div>
            </div>
        );
    }

    const actionBodyTemplate = (dataKey)  => {
        return (
            <Button type="button" icon="pi pi-times" className="p-button-danger" onClick={() => personelService.deletePersonel(dataKey["id"])}></Button>
        );
    }
    const actionDetay = (dataKey)  => {
        return <div>
            <Button icon="pi pi-search" className="p-button-success" onClick={() => personelService.getiletisimKimId(dataKey["id"]).then(res => setPersonel(res), setdisplayDetay(true)  )}></Button>
        </div>;
    }

    const actionGuncelle= (dataKey)  => {
        return <div>
            <Button icon="pi pi-pencil" className="p-button-warning" onClick={() => guncelleme(dataKey["id"])}></Button>

        </div>;
    }

    const guncelleme = (dataKey)  => {
        setdisplayGuncelle(true)
        personelService.getPersonelKimId(dataKey).
            then(res => setSecilenPersonel({ kimlik: res.kimlik, iletisim: res.iletisim, is: res.is })
            );
    }

    const statusBodyTemplate = (rowData)  => {
        return <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>;
    }


    const representativeBodyTemplate = (rowData)  => {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const renderDateFilter = ()  => {
        return (
            <Calendar value={dateFilter} onChange={onDateFilterChange} placeholder="İşe Başlama Tarihi" dateFormat="dd-mm-yy" className="p-column-filter" />
        );
    }

    const onDateFilterChange = (event)  => {
        if (event.value !== null)
            dt.filter(formatDate(event.value), 'date', 'equals');
        else
            dt.filter(null, 'date', 'equals');

       setDateFilter( event.value) ;
    }

    const filterDate = (value, filter)  => {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === formatDate(filter);
    }

    const formatDate = (date)  => {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    } 


    const renderFooter = (name)  => {
        return (
            <div>
                <Button label="Kapat" icon="pi pi-times" onClick={() => setdisplayBasic(false),setdisplayDetay(false),setdisplayGuncelle(false)} className="p-button-danger" />
            </div>
        );
    }

    const header = renderHeader();
    const dateFilterEl = renderDateFilter();
    return (
        <div className="datatable-doc-demo">
            <Dialog header="Personel Detayı"
                visible={displayDetay}
                style={{ width: '50vw' }} onHide={() => setdisplayDetay(false)} footer={() =>renderFooter('displayDetay')}>
                {/* <DataTable value={}
                    paginator rows={10} emptyMessage="Personel Detayı Bulunamadı!"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}>
                    <Column selectionMode="multiple" style={{ width: '3em' }} />
                    <Column field="telefon" header="Telefon" />
                    <Column field="email" header="Email" />
                    <Column body={actionBodyTemplate} headerStyle={{ width: '8em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />
                </DataTable> */}
            </Dialog>
            <Dialog header="Personel Bilgi Güncelleme"
                visible={displayGuncelle}
                style={{ width: '50vw' }} onHide={() => setdisplayGuncelle(false)} footer={() => renderFooter('displayGuncelle')}>

                <PersonelKayit guncelleme={secilenpersonel} />

            </Dialog>

            <DataTable value={personelBilgileri}
                header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={globalFilter}
                responsive className="p-datatable-customers"
                dataKey="id" rowHover
                paginator rows={10}
                emptyMessage="Personel bulunamadı!"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50]}>
                <Column selectionMode="single" style={{ width: '3em' }} />
                <Column field="ad" header="Ad" sortable filter filterPlaceholder="Ad" />
                <Column field="soyad" header="Soyad" sortable filter filterPlaceholder="Soyad" />
                <Column field="is.date" header="İşe Başlama Tarihi" sortable filter filterMatchMode="custom" filterFunction={filterDate} filterElement={dateFilter} />
                <Column field="is.sirket" header="Şirket" sortable filter filterPlaceholder="Sirket" />
                <Column field="is.baglioldugumudurluk" header="Birim" sortable filter filterPlaceholder="Birim" />
                <Column field="is.baglioldugumudur" header="Yönetici" sortable filter filterPlaceholder="Yönetici" />
                <Column body={actionDetay} style={{ textAlign: 'center', width: '4em' }} />
                <Column body={actionGuncelle} style={{ textAlign: 'center', width: '4em' }} />
                <Column body={(datakey) => actionBodyTemplate(datakey)}
                    headerStyle={{ width: '4em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />
            </DataTable>
        </div>
    )

};
export default PersonelListesi

