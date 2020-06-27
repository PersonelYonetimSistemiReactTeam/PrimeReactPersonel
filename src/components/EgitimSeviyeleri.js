import React, { Component } from 'react';

export class EgitimSeviyeleri extends Component {

    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <div style={{ visible: true }} >
                            <h3>İlköğretim Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>İlköğretim Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>Orta Öğretim Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>Lise Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>Meslek Yüksek Okulu Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>Üniversite Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>Yüksek Lisans Bilgisi</h3>

                        </div>
                        <div style={{ visible: "false" }} >
                            <h3>Doktora Bilgisi</h3>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}











