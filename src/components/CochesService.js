import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class CochesService extends Component {

    state = {
        coches: [],
        statusCoches: false,
    }

    marcaRef = React.createRef();

    filtrar = (e) => {
        e.preventDefault();
        var filtro = this.state.coches.filter(coche => coche.marca.toLowerCase() == this.marcaRef.current.value.toLowerCase());
        this.setState({
            coches: filtro
        })
    }

    loadCoches = (e) => {

        if(e != undefined){
            e.preventDefault();
        }
        
        var request = Global.urlCoches + "webresources/coches";
        var auxCoches = []
        axios.get(request).then(response => {
            for(var coches of response.data){
                auxCoches.push(coches)
            }  
            this.setState({
                coches: auxCoches,
                statusCoches: true
            })
        });
    }

    componentDidMount = () => {
        this.loadCoches()
    }

    render() {
        return (
            <div>
                <h1>Coches service</h1>
                <form>
                    <label>Introduzca una marca: </label>
                    <input type="text" ref={this.marcaRef}/>
                    <button onClick={this.filtrar}>Filtrar</button>
                    <button onClick={this.loadCoches}>Cargar</button>
                </form><br/>
                <table border="1px">
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Conductor</th>
                            <th>Imagen</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            this.state.statusCoches &&
                            this.state.coches.map((coche, index) => {
                                return (
                                    <tr key={coche.idcoche}>
                                        <td>{coche.marca}</td>
                                        <td>{coche.modelo}</td>
                                        <td>{coche.conductor}</td>
                                        <td><img src={coche.imagen} style={{width: "150px", "height": "150px"}}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
