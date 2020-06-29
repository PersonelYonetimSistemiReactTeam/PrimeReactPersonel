import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {CustomerService} from '../service/CustomerService';
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';
import {MultiSelect} from 'primereact/multiselect';
import {ProgressBar} from 'primereact/progressbar';
import classNames from 'classnames';
import { PersonelListeService } from '../service/CustomerService';

export class PersonelListe extends Component {

    constructor() {
        super();
        this.state = {
            customers: null,
            selectedCustomers: null,
            globalFilter: null,
            selectedRepresentatives: null,
            dateFilter: null,
            selectedStatus: null,
        };

        this.representatives = [
            {name: "Amy Elsner", image: ''},
            {name: "Anna Fali", image: ''},
            {name: "Asiya Javayant", image: ''},
            {name: "Bernardo Dominic", image: ''},
        ];

        this.statuses = [
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ];

        this.customers = new CustomerService();

        //body cells
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        //filters
        this.representativeItemTemplate = this.representativeItemTemplate.bind(this);
        this.onRepresentativeFilterChange = this.onRepresentativeFilterChange.bind(this);
        this.onDateFilterChange = this.onDateFilterChange.bind(this);
        this.filterDate = this.filterDate.bind(this);       //custom filter function
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.onStatusFilterChange = this.onStatusFilterChange.bind(this);
    }

    componentDidMount() {
        this.customers.getCustomersLarge().then(data => this.setState({customers: data}));
    }
//Genel arama için yapıldı
    renderHeader() {
        return (
            <div>
                Personel Listesi
                <div  className="p-datatable-globalfilter-container">
                    <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" />
                </div>
            </div>
        );
    }

    activityBodyTemplate(rowData) {
        return <ProgressBar value={rowData.activity} showValue={false} />;
    }

    actionBodyTemplate() {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    statusBodyTemplate(rowData) {
        return <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>;
    }

    countryBodyTemplate(rowData) {
        let { name, code } = rowData.country;

        return (
            <React.Fragment>
                <img src="showcase/demo/images/flag_placeholder.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" alt={name} className={classNames('flag', 'flag-' + code)} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{name}</span>
            </React.Fragment>
        );
    }

    representativeBodyTemplate(rowData) {
        const src = "showcase/demo/images/avatar/" + rowData.representative.image;

        return (
            <React.Fragment>
                <img alt={rowData.representative.name} src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{rowData.representative.name}</span>
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
                <img alt={option.name} src={src} srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style={{verticalAlign: 'middle'}} />
                <span style={{verticalAlign: 'middle', marginLeft: '.5em'}}>{option.name}</span>
            </div>
        );
    }

    onRepresentativeFilterChange(event) {
        this.dt.filter(event.value, 'representative.name', 'in');
        this.setState({selectedRepresentatives: event.value});
    }

    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="İşe Başlama Tarihi" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({dateFilter: event.value});
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
                        itemTemplate={this.statusItemTemplate} showClear={true} placeholder="Birim" className="p-column-filter"/>
        );
    }

    statusItemTemplate(option) {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    onStatusFilterChange(event) {
        this.dt.filter(event.value, 'status', 'equals');
        this.setState({selectedStatus: event.value});
    }

    render() {
        const header = this.renderHeader();
        const representativeFilter = this.renderRepresentativeFilter();
        const dateFilter = this.renderDateFilter();
        const statusFilter = this.renderStatusFilter();

        return (
            <div className="datatable-doc-demo">
                <DataTable ref={(el) => this.dt = el} value={this.state.customers}
                    header={header} responsive className="p-datatable-customers" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                    selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({selectedCustomers: e.value})}
                    paginator rows={10} emptyMessage="Personel bulunamadı!" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10,25,50]}>
                    <Column selectionMode="multiple" style={{width:'3em'}}/>
                    <Column field="name" header="Ad-Soyad" sortable filter filterPlaceholder="Ad-Soyad" />
                    <Column sortField="country.name" filterField="country.name" header="İl" body={this.countryBodyTemplate} sortable filter filterMatchMode="contains" filterPlaceholder="İl"/>
                    <Column field="date" header="İşe Başlama Tarihi" sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
                    <Column field="status" header="Birim" body={this.statusBodyTemplate} sortable filter filterElement={statusFilter} />
                    <Column body={this.actionBodyTemplate} headerStyle={{width: '8em', textAlign: 'center'}} bodyStyle={{textAlign: 'center', overflow: 'visible'}} />
                </DataTable>
            </div>
        );
    }
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<PersonelListe />, rootElement);