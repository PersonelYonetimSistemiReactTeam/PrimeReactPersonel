import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { CustomerService } from '../service/CustomerService';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressBar } from 'primereact/progressbar';
import classNames from 'classnames';
import { PersonelListeService } from '../service/CustomerService';
import { SplitButton } from 'primereact/splitbutton';
import { Growl } from 'primereact/growl';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Dialog } from 'primereact/dialog';

const PersonelListesi = (props) => {
    const [personel, setPersonel] = useState({
        kimlik: {},
        egitim: {},
        is: {},
        iletisim: {}
    });
    const [displayBasic, setdisplayBasic] = useState({});
    const [personelList, setdisplayBasic] = useState({});
    const [personelList, setPersonelList] = useState({});
    const [personelList, setPersonelList] = useState({});
    const [personelList, setPersonelList] = useState({});

    const [personelList, setPersonelList] = useState({});

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                this.growl.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        }

    ]
    const customers = new CustomerService();
    const header = this.renderHeader();
    const dateFilter = this.renderDateFilter();


    const renderHeader = () => {
        return (
            <div>
                Personel Listesi
                <div className="p-datatable-globalfilter-container">
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
                </div>
            </div>
        );
    }

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    const actionBodyTemplate = () => {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>;
    }

    const countryBodyTemplate = (rowData) => {
        let { name, code } = rowData.country;

        return (
            <React.Fragment>
                <img src="showcase/demo/images/flag_placeholder.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{name}</span>
            </React.Fragment>
        );
    }

    const representativeBodyTemplate = (rowData) => {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    const renderRepresentativeFilter = (rowData) => {
        return (
            <MultiSelect className="p-column-filter" value={selectedRepresentatives} options={this.representatives}
                onChange={this.onRepresentativeFilterChange} itemTemplate={this.representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    const representativeItemTemplate = (option) => {
        const src = "showcase/demo/images/avatar/" + option.image;
    }

    useEffect(() => {

        customers.getCustomersLarge().then(data => setPersonelList(data));
    }, []);


    return (

        <div className="datatable-doc-demo">
            <Dialog header="Personel Detayları"
                visible={displayBasic}
                style={{ width: '50vw' }} onHide={() => this.setState({ displayBasic: false })} footer={this.renderFooter('displayBasic')}>
            </Dialog>

            <h3>Basic</h3>
            <Button label="Show" icon="pi pi-external-link" onClick={() => this.setState({ displayDetay: true })} />
            <Dialog header="Personel Detayları"
                visible={displayDetay}
                style={{ width: '50vw' }} onHide={() => this.setState({ displayDetay: false })} footer={this.renderFooter('displayDetay')}>
            </Dialog>
            <Button label="a" icon="pi pi-pencil" onClick={() => this.setState({ displayGuncelle: true })} />
            <Dialog header="Personel Bilgi Güncelleme"
                visible={displayGuncelle}
                style={{ width: '50vw' }} onHide={() => this.setState({ displayGuncelle: false })} footer={this.renderFooter('displayGuncelle')}>
                <DataTable ref={(el) => this.dt = el} value={customers}
                    header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={globalFilter}
                    selection={selectedCustomers} onSelectionChange={e => this.setState({ selectedCustomers: e.value })}
                    paginator rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown">
                    <Column selectionMode="multiple" style={{ width: '3em' }} />
                    <Column field="name" header="Ad" sortable filter filterPlaceholder="Ad" />
                    <Column field="surname" header="Soyad" sortable filter filterPlaceholder="Soyad" />
                    <Column sortField="country.name" filterField="country.name" header="İl" body={this.countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="İl" />
                    <Column field="date" header="İşe Başlama Tarihi" sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                    <Column field="sirket" header="Şirket" sortable filter filterPlaceholder="Sirket" />
                    <Column field="status" header="Birim" sortable filter filterPlaceholder="Birim" />
                    <Column field="yonetici" header="Yönetici" sortable filter filterPlaceholder="Yönetici" />
                </DataTable>
            </Dialog>

            <DataTable ref={(el) => this.dt = el} value={customers}
                header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={globalFilter}
                selection={selectedCustomers} onSelectionChange={e => this.setState({ selectedCustomers: e.value })}
                paginator rows={10} emptyMessage="Personel bulunamadı!"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}>
                <Column selectionMode="multiple" style={{ width: '3em' }} />
                <Column field="name" header="Ad" sortable filter filterPlaceholder="Ad" />
                <Column field="surname" header="Soyad" sortable filter filterPlaceholder="Soyad" />
                <Column sortField="country.name" filterField="country.name" header="İl" body={this.countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="İl" />
                <Column field="date" header="İşe Başlama Tarihi" sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                <Column field="sirket" header="Şirket" sortable filter filterPlaceholder="Sirket" />
                <Column field="status" header="Birim" sortable filter filterPlaceholder="Birim" />
                <Column field="yonetici" header="Yönetici" sortable filter filterPlaceholder="Yönetici" />
                <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '6em' }} />
                <Column body={this.actionBodyTemplate} headerStyle={{ width: '8em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />

            </DataTable>

        </div>
    );
};
export default PersonelListesi;

