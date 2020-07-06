import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';

import React, { Component } from 'react';
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
import { Dialog } from 'primereact/dialog';
import PersonelKayit from './PersonelKayit';
import { PersonelService } from '../service/PersonelService';
import { ProgressSpinner } from 'primereact/progressspinner';



export class PersonelListe extends Component {
    renderScene(route, navigator) {
        var routeId = route.id; // hangi route olduğunu id altına atıyoruz
        if (routeId === 'PersonelKayit') {
            return (
                <PersonelKayit
                    navigator={navigator} // açılan pencerenin parametreler göndermek isterseniz bunu yazarsınız
                />
            );
        }
    }

    constructor() {
        super();
        this.state = {
            customers: null,
            selectedCustomers: null,
            globalFilter: null,
            selectedRepresentatives: null,
            dateFilter: null,
            selectedStatus: null,
            displayBasic: false,
            personelService: null,
            personelBilgileri: null,
            isLoading: true
        };
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.growl.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
                }
            }

        ]

        this.customers = new CustomerService();
        this.personelService = new PersonelService();


        //body cells
        // this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);
        this.actionDetay = this.actionDetay.bind(this);
        this.actionGuncelle = this.actionGuncelle.bind(this);

        //filters
        this.representativeItemTemplate = this.representativeItemTemplate.bind(this);
        this.onRepresentativeFilterChange = this.onRepresentativeFilterChange.bind(this);
        this.onDateFilterChange = this.onDateFilterChange.bind(this);
        this.filterDate = this.filterDate.bind(this);
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.onStatusFilterChange = this.onStatusFilterChange.bind(this);
        this.handleOnClick =  this.handleOnClick.bind(this);
    }


    componentDidMount() {
        // this.customers.getCustomersLarge().then(data => this.setState({ customers: data }));

        this.personelService.getPersonelSirketKimlikId().then(res =>{
            this.setState({ personelBilgileri: res })
        } )

        // this.personelService. getPersonel(3).then(res => console.log(res));
        // this.personelService.getPersonelSirketKimlikId().then(res => this.setState({ personelBilgileri: res }))
        // this.personelService.getPersonelSirketKimlikId().then(res => console.log(res))
    }
    //Genel arama için yapıldı
    renderHeader() {
        return (
            <div>
                Personel Listesi
                <div className="p-datatable-globalfilter-container">
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate(rowData, column) {
        return (
            <Button type="button" icon="pi pi-times" className="p-button-danger" onClick={console.log()}></Button>
        );
    }
    actionDetay(rowData, column) {
        return <div>
            <Button icon="pi pi-search" className="p-button-success" onClick={() => this.setState({ displayDetay: true })} ></Button>
        </div>;
    }

    




    actionGuncelle(rowData, column) {
        return <div>
            <Button icon="pi pi-pencil" className="p-button-warning" onClick={() => this.setState({ displayGuncelle: true })}></Button>

        </div>;
    }

    statusBodyTemplate(rowData) {
        return <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>;
    }


    representativeBodyTemplate(rowData) {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{rowData.representative.name}</span>
            </React.Fragment>
        );
    }

    renderRepresentativeFilter() {
        return (
            <MultiSelect className="p-column-filter" value={this.state.selectedRepresentatives} options={this.representatives}
                onChange={this.onRepresentativeFilterChange} itemTemplate={this.representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    representativeItemTemplate(option) {
        const src = "showcase/demo/images/avatar/" + option.image;

        return (
            <div className="p-multiselect-representative-option">
                <img alt={option.name} src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style={{ verticalAlign: 'middle' }} />
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{option.name}</span>
            </div>
        );
    }

    onRepresentativeFilterChange(event) {
        this.dt.filter(event.value, 'representative.name', 'in');
        this.setState({ selectedRepresentatives: event.value });
    }

    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="İşe Başlama Tarihi" dateFormat="dd-mm-yy" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({ dateFilter: event.value });
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    formatDate(date) {
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

    renderStatusFilter() {
        return (
            <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={this.onStatusFilterChange}
                itemTemplate={this.statusItemTemplate} showClear={true} placeholder="Birim" className="p-column-filter" />
        );
    }

    statusItemTemplate(option) {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    onStatusFilterChange(event) {
        this.dt.filter(event.value, 'status', 'equals');
        this.setState({ selectedStatus: event.value });
    }
    save() {
        this.growl.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Kapat" icon="pi pi-times" onClick={() => this.setState({ displayBasic: false })} className="p-button-danger" />
            </div>
        );
    }
    handleOnClick = () => {
       console.log("tamammm")
        this.setState({redirect: true});
      }
      
    render() {
        const header = this.renderHeader();
        const dateFilter = this.renderDateFilter();

        if (this.state.redirect) {
            return <PersonelKayit push to="/PersonelKayit" />;
          }


        return (
            <div className="datatable-doc-demo">
                <Dialog header="Personel Detayları"
                    visible={this.state.displayDetay}
                    style={{ width: '50vw' }} onHide={() => this.setState({ displayDetay: false })} footer={this.renderFooter('displayDetay')}>
               <DataTable 
               //ref={(el) => this.dt = el} 
            //    value={this.state.customers}
                    // header={header} responsive className="p-datatable-customers" dataKey="id"
                    // rowHover globalFilter={this.state.globalFilter}
                    // selection={this.state.selectedCustomers} 
                    paginator rows={10} emptyMessage="Personel bulunamadı!"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}>
                    <Column selectionMode="multiple" style={{ width: '3em' }} />
                    <Column field="name" header="Kıdem" />
                    <Column field="surname" header="Çalıştığı Müdürlük"  />
                    <Column sortField="country.name" header="Çalıştığı İl" body={this.countryBodyTemplate} />
                    <Column field="date" header="İşe Başlama Tarihi" />
                    <Column field="yonetici" header="Yönetici"/>
                    <Column body={this.actionBodyTemplate} headerStyle={{ width: '8em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />

                </DataTable>
                </Dialog>
                <Dialog header="Personel Bilgi Güncelleme"
                    visible={this.state.displayGuncelle}
                    style={{ width: '50vw' }} onHide={() => this.setState({ displayGuncelle: false })} footer={this.renderFooter('displayGuncelle')}>

                </Dialog>

                <DataTable  value={this.state.personelBilgileri}
                    header={header} responsive className="p-datatable-customers" dataKey="id" rowHover
                    paginator rows={10} emptyMessage="Personel bulunamadı!"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" 
                    rowsPerPageOptions={[10, 25, 50]}>
                    <Column selectionMode="single" style={{ width: '3em' }} />
                    <Column field="ad" header="Ad" sortable filter filterPlaceholder="Ad" />
                    <Column field="soyad" header="Soyad" sortable filter filterPlaceholder="Soyad" />
                    <Column sortField="is.il" filterField="country.name" header="İl" sortable filter filterPlaceholder="İl" />
                    <Column field="is.date" header="İşe Başlama Tarihi" sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                    <Column field="is.sirket" header="Şirket" sortable filter filterPlaceholder="Sirket" />
                    <Column field="is.baglioldugumudurluk" header="Birim" sortable filter filterPlaceholder="Birim" />
                    <Column field="is.baglioldugumudur" header="Yönetici" sortable filter filterPlaceholder="Yönetici" />
                    <Column body={this.actionDetay} style={{ textAlign: 'center', width: '4em' }} />
                    <Column body={this.actionGuncelle} style={{ textAlign: 'center', width: '4em' }} />
                    <Column body={this.actionBodyTemplate} 
                    headerStyle={{ width: '4em', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} />
                </DataTable>
            </div>
        );
    }
}

