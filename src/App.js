import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import './App.css';
import { Header } from './components/Header/Header';
import { Formulario } from './components/Formulario/Formulario';
import { MiOrganizacion } from './components/MiOrganizacion/MiOrganizacion';
import { Equipo } from './components/Equipo/Equipo';
import { Footer } from './components/Footer/Footer';

function App() {

  const [mostrarForm, setMostrarForm] = useState(true);
  const [colaboradores, setColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Frontend",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Devops",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor", 
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack", 
    fav: true
  }]);

  const [equipos, setEquipos] = useState([ 
      {
        id: uuidv4(),
        equipo: 'Programacion',
        color: '#57C278',
        background: '#D9F7E9' 
      },
      {
        id: uuidv4(),
        titulo: 'Frontend',
        color: '#82CFFA',
        background: '#E8F8FF'
      },
      {
        id: uuidv4(),
        titulo: 'Data Science',
        color: '#A6D157',
        background: '#F0F8E2'
      },
      {
        id: uuidv4(),
        titulo: 'Devops',
        color: '#E06B69',
        background: '#FDE7E8'
      },
      {
        id: uuidv4(),
        titulo: 'UX y Diseño',
        color: '#DB6EBF',
        background: '#FAE9F5'
      },
      {
        id: uuidv4(),
        titulo: 'Móvil',
        color: '#FFBA05',
        background: '#FFF5D9'
      },
      {
        id: uuidv4(),
        titulo: 'Innovación y Gestión',
        color: '#FF8A29',
        background: '#FFEEDF',
      }
  ])

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm);
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log('Colaborador registrado:', colaborador );
  }

  const eliminarColaborador = (id) => {
    console.log('Colaborador eliminado', id);
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  }

  const actualizarColor = (color, id) => {
    console.log('Color actualizado', color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.color = color;
      }
      return equipo;
    })
    setEquipos(equiposActualizados);
  }

  const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo)
      setEquipos([... equipos, {... nuevoEquipo, id: uuidv4()}])
  }

  const colaboradorFavorito = (id) => {
    
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
        
      }
      return colaborador;
    })
    setColaboradores(colaboradoresActualizados);
    }

   

  return (
    <div>
      <Header />
      { mostrarForm ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}  /> : <></> }
      
      {/* {mostrarForm && <Formulario /> } otra manera de hacer lo mismo, sin el ternario*/} 
      
      <MiOrganizacion cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => {
          return (
            <Equipo datos={equipo} 
            key={equipo.id} 
            eliminarColaborador = {eliminarColaborador}
            actualizarColor = {actualizarColor}
            colaboradorFavorito = {colaboradorFavorito}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
            />
          )
        })
      }
      <Footer />
    </div>
  );
}

export default App;
