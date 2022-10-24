import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class BuscasdorCustomer extends Component {

    cajaIdRef = React.createRef();

    state = {
        customer: {},
        status: false
    }

    buscarCustomer = (e) => {
        e.preventDefault();
        var request = "customers/" + this.cajaIdRef.current.value + ".json";
        axios.get(Global.urlCustomers + request).then(response => {
            this.setState({
                customer: response.data.customer,
                status: true 
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Buscador API Customer</h1>
                <form>
                    <label>Introduzca ID: </label>
                    <input type="text" ref={this.cajaIdRef}/>
                    <button onClick={this.buscarCustomer}>Buscar cliente</button>
                </form>
                {
                    this.state.status &&
                    (<div>
                        <h4>Contact Name: {this.state.customer.contactName}</h4>
                    </div>)
                }
            </div>
        )
    }
}
