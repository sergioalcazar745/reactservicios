import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class ServicioCustomers extends Component {

    urlCustomers = Global.url;

    state = {
        customers: []
    }

    loadCustomers = () => {
        var request = Global.url + "customers.json";
        axios.get(this.urlCustomers).then(response => {
            this.setState({
                customers: response.data.results
            })
        });
    }

    componentDidMount = () => {
        this.loadCustomers()
    }

    render() {
        return (
            <div>
                <h1>Servicio Customers</h1>
                {
                    this.state.customers.map((customer, index) => {
                        return (<h2 style={{color: "red"}} key={customer.id}>{customer.id}</h2>)
                    })
                }
            </div>
        )
    }
}
