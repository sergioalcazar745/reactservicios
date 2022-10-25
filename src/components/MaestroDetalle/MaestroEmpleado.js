import React, { Component } from 'react';
import Global from '../../Global';
import axios from 'axios';

export default class MaestroEmpleado extends Component {

    state = {
        empleados: [],
        statusEmpleados: false
    }

    loadEmpleados = () => {
        var request = Global.urlEmpleados + "api/Empleados/EmpleadosDepartamento/" + this.props.iddepartamento;
        var auxEmpleados = [];

        axios.get(request).then(response => {
            for (var empleado of response.data) {
                auxEmpleados.push(
                    <div key={empleado.idEmpleado}>
                        <li>{empleado.apellido}</li>
                        <li>{empleado.oficio}</li>
                        <li>{empleado.salario}</li>
                        <li>{empleado.departamento}</li>
                        <hr />
                    </div>
                );
            }
            this.setState({
                empleados: auxEmpleados,
                statusEmpleados: true
            })
        })
    }

    componentDidMount = () => {
        console.log("Hola")
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.iddepartamento !=  this.props.iddepartamento){
            console.log("Hola2")
            this.loadEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h1>Maestro Empleado</h1>
                <ul>
                    {
                        this.state.statusEmpleados &&
                        this.state.empleados
                    }
                </ul>
            </div>
        )
    }
}
