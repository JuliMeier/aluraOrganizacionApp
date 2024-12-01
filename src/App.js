import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Formulario } from './components/Formulario/Formulario';
import { MiOrganizacion } from './components/MiOrganizacion/MiOrganizacion';

function App() {

  const [mostrarForm, setMostrarForm] = useState(true);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  }

  return (
    <div>
      <Header />
      { mostrarForm ? <Formulario /> : <></> }
      
      {/* {mostrarForm && <Formulario /> } otra manera de hacer lo mismo, sin el ternario*/} 
      
      <MiOrganizacion cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
