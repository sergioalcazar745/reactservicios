import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    
    constructor(props){
        super(props)
        console.log("Numero de props: " + props.numero)
    }

    state = {
        tabla: []
    }

    tablaMultiplicar = (event) => {
        var numero = parseInt(this.props.numero);
        var aux = [];
        
        for (let i = 1; i <= 10; i++) {
            aux.push(
            <tr key={i}>
                <td>{numero} x {i}</td>
                <td>{numero * i}</td>
            </tr>
            )           
        }
        this.setState({
            tabla: aux
        })
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero != this.props.numero){
            this.tablaMultiplicar();
        }
    }

    componentDidMount = () => {
        this.tablaMultiplicar();
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <table className='table' style={{margin: "auto"}}>
                    <thead>
                        <tr>
                            <th>Operacion</th>
                            <th>Resultado</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {
                            this.state.tabla.length > 0 &&
                            this.state.tabla
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}