import React, { Component } from 'react';
import '../layout/sass/personelKayit.scss';
import { OkulBilgisi } from './OkulBilgisi';
import { YuksekOkulBilgisi } from './YuksekOkulBilgisi'


export class EgitimSeviyeleri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            okulSeviyesi:'İlköğretim Bilgisi'
        };
    }
    render() {
        const egitimSeviyesi =Number(this.props[0]) ;
        return (
            <div className="p-grid">
                <div className="p-col-12 ">
                    <div className="card">
                        <div className={egitimSeviyesi > 0 ? 'divVisible okulBilgisi' : 'divVisibleHidden' }>
                            <h2>İlköğretim Bilgisi</h2>
                            <OkulBilgisi />
                        </div>
                        <div className={egitimSeviyesi > 1 ? 'divVisible okulBilgisi' : 'divVisibleHidden'} >
                            <h2> Orta Öğretim Bilgisi</h2>
                            <OkulBilgisi/>

                        </div>
                        <div className={egitimSeviyesi > 2 ? 'divVisible okulBilgisi' : 'divVisibleHidden'} >
                        <h2> Lise Bilgisi</h2>
                            <OkulBilgisi/>

                        </div>
                        <div className={egitimSeviyesi > 3 ? 'divVisible okulBilgisi' : 'divVisibleHidden'} >
                            <h2>Üniversite Bilgisi</h2>
                            <YuksekOkulBilgisi/>
                        </div>
                        <div className={egitimSeviyesi > 4 ? 'divVisible okulBilgisi' : 'divVisibleHidden'}>
                            <h2>Yüksek Lisans Bilgisi</h2>
                            <YuksekOkulBilgisi/>
                        </div>
                        <div className={egitimSeviyesi > 5 ? 'divVisible okulBilgisi' : 'divVisibleHidden'} >
                            <h2>Doktora Bilgisi</h2>
                            <YuksekOkulBilgisi/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}











