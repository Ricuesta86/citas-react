import React, { Component } from 'react'
import uuid from 'uuid'

export class AgregarCitas extends Component {

    nombreMascotaRef=React.createRef();
    nombreDuennoRef=React.createRef();
    fechaRef=React.createRef();
    horaRef=React.createRef();
    sintomaRef=React.createRef();



    crearNuevaCita=(e)=>{
        e.preventDefault();
        // console.log('Enviado el Formulario');
        const nombreMascota=this.nombreMascotaRef.current.value,
            propietario=this.nombreDuennoRef.current.value,
            fecha=this.fechaRef.current.value,
            hora=this.horaRef.current.value,
            sintomas=this.sintomaRef.current.value;

        // Object Literal 
        const nuevaCita={
            id:uuid(),
            nombreMascota,
            propietario,
            fecha,
            hora,
            sintomas
        }

        // console.log(this.nombreMascotaRef.current.value);
        // console.log(this.nombreDuennoRef.current.value);
        // console.log(this.fechaRef.current.value);
        // console.log(this.horaRef.current.value);
        // console.log(this.sintomaRef.current.value);
        
        this.props.crearCita(nuevaCita);
    }
    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="text-center card-title mb-5">Agregar las Cita aquí</h2>
                    <form  onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.nombreMascotaRef} className="form-control" placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" ref={this.nombreDuennoRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.fechaRef} className="form-control" />
                            </div>                            

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" ref={this.horaRef} className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  ref={this.sintomaRef} className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AgregarCitas
