import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCitas from './componentes/AgregarCitas';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {

  // State
  state={
    citas:[]
  }

  // Funcion de para crear una cita
  crearCita=(nuevaCita)=>{
    // console.log(nuevaCita);
    // Copiando las citas y agrego la nueva cita    
    const citas=[...this.state.citas,nuevaCita];

    console.log(citas);

    this.setState({
      citas
    })
    
  }

  borrarCita=id=>{
    // console.log(id);
    // Obtener y copiar las citas del state
    const citasActuales=[...this.state.citas]

    // console.log('Antes ...');
    // console.log(citasActuales);
    
    // Borrar la cita del state
    const citas=citasActuales.filter(cita=>cita.id !== id)

    // console.log('Despues ...');
    // console.log(citas);
    
    // Actualizar la cita del state
    this.setState({
      citas
    })
    
  }

  componentDidMount(){
    // console.log('listo');
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas:JSON.parse(citasLS)
      })
    }    
  }

  componentDidUpdate(){
    // console.log('Cuando hay un cambio');
    localStorage.setItem('citas',JSON.stringify(this.state.citas));
  }


  render(){
      return (
        <div className="container">
              <Header 
                titulo={"Administrador de Pacientes de Veterianria"}
              />
              <div className="row">
                <div className="col-md-6">
                  <AgregarCitas 
                    crearCita={this.crearCita}
                  />
                </div>
                <div className="col-md-6">
                  <ListaCitas 
                    citas={this.state.citas}
                    borrarCita={this.borrarCita}
                  />
                </div>
              </div>
          </div>
        );
  }
}

export default App;
