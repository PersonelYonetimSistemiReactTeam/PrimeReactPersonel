import React, {Component} from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

export class PersonelListe extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          Users: [],
          isLoading: true
        };
      }
    
    componentDidMount() {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(Users => this.setState({ Users , isLoading : false}));
        }, 5000);
        
      }
    render() {
        const {isLoading} = this.state;
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Personel Listesi  </h1>
                        {isLoading ?  <ProgressSpinner style={{position: 'absolute'},{width:'25%'}}/>   : ''}
                        {
                                this.state.Users.map(Users => 
                                    <div key={Users.id}>
                                        {Users.name} - {Users.email}
                                    </div>
                                    
                                    ) 
                        }
                       
                      
                     
                    </div>
                </div>
            </div>
        );
    }
}