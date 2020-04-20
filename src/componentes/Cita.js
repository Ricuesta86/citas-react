import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Cita extends Component {
    eliminarCita=()=>{
        // console.log(`Eliminado cita id: ${this.props.info.id}`);
        this.props.borrarCita(this.props.info.id)
    }
    render() {
        const {nombreMascota,propietario,fecha,hora,sintomas}=this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{nombreMascota}</h3>
                    <p className="card-text"><span>Nombre de Dueño:</span>{propietario}</p>
                    <p className="card-text"><span>Fecha:</span>{fecha}</p>
                    <p className="card-text"><span>Hora:</span>{hora}</p>
                    <p className="card-text"><span>Sintomas:</span></p>
                    <p className="card-text">{sintomas}</p>
                    <button className="alert alert-danger" onClick={this.eliminarCita}>Borrar &times;</button>
                </div>
            </div>
        )
    }
}

Cita.propTypes = {
    info: PropTypes.shape({
        nombreMascota: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    borrarCita: PropTypes.func.isRequired

}

export default Cita
