import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'

export default class DepartamentosEmpleados extends Component {

    state = {
        departamentos: [],
        statusDepartamentos: false,
        empleados: [],
        statusEmpleados: false
    }

    selectDepartamentoRef = React.createRef();

    cargarEmpleados = (e) => {
        e.preventDefault();
        var request = Global.urlEmpleados + "api/Empleados/EmpleadosDepartamento/" + this.selectDepartamentoRef.current.value;
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

    loadDepartamentos = () => {
        var request = Global.urlDepartamentos + "api/departamentos";
        var options = [];

        axios.get(request).then(response => {
            for (var departamento of response.data) {
                options.push(<option key={departamento.Numero} value={departamento.Numero}>{departamento.Nombre}</option>)
            }
            this.setState({
                departamentos: options,
                statusDepartamentos: true
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos()
    }

    render() {
        return (
            <div>
                <h1>DepartamentosEmpleados</h1>
                <form>
                    <select onChange={this.cargarEmpleados} ref={this.selectDepartamentoRef}>
                        {
                            this.state.statusDepartamentos &&
                            this.state.departamentos
                        }
                    </select>
                </form>
                <ul>
                    {
                        this.state.empleados
                    }
                </ul>
            </div>
        )
    }
}
