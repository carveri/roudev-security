'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import ModalPerfil from "../../[Components]/ModalPerfil";
import ModalConectar from "../../[Components]/ModalConectar";
import ModalSoporte from "../../[Components]/ModalSoporte";
import ModalConfiguraciones from "../../[Components]/ModalConfiguraciones";
import Sidebar from "../../../React/Components/Sidebar";
import ModalIniciar from "../../[Components]/ModalIniciar";
import ModalRecientes from "../../[Components]/ModalRecientes";
import ModalFavoritos from "../../[Components]/ModalFavoritos";
import ModalMisProyectos from "../../[Components]/ModalMisProyectos";
import ModalMisEquipos from "../../[Components]/ModalMisEquipos";
import ModalFinanzas from "../../[Components]/ModalFinanzas";
import Navbar from "../../../React/Components/Navbar";
import ModalNotificacion from "../../[Components]/ModalNotificacion";
import ModalPuntos from "../../[Components]/ModalPuntos";
import ModalDetalleNotificaciones from "../../[Components]/ModalDetalleNotificaciones";
import ModalConfirmarAportantes from "../../[Components]/utils/ModalConfirmarAportantes";


const PageLayout = ({children1, session}) => {
  const router = useRouter()

  // NAVBAR
  const [activarPerfil, setActivarPerfil] = useState(false)
  const [activarConectar, setActivarConectar] = useState(false)
  const [activarSoporte, setActivarSoporte] = useState(false)
  const [activarConfiguraciones, setActivarConfiguraciones] = useState(false)
  //const [activarVideoCorfo, setActivarVideoCorfo] = useState(false)
  const [activarNotificacion, setActivarNotificacion] = useState(false)
  const [activarDetalleNotificacion, setActivarDetalleNotificacion] = useState(false)
  const [activarPuntos, setActivarPuntos] = useState(false)

  const [activarModalConfirmar, setActivarModalConfirmar] = useState(false)

  // SIDEBAR
  const [activarIniciar, setActivarIniciar] = useState(false)
  const [activarRecientes, setActivarRecientes] = useState(false)
  const [activarFavoritos, setActivarFavoritos] = useState(false)
  const [activarProyectos, setActivarProyectos] = useState(false)
  const [activarEquipos, setActivarEquipos] = useState(false)
  const [activarFinazas, setActivarFinanzas] = useState(false)
  const [activarVideoCorfo, setActivarVideoCorfo] = useState(false)




  const handleClickSidebar =(e, href)=>{
    //e.preventDefault()
    if(e.target.name ==="Home") {
      router.push(href)
    }
    else if(e.target.name === 'Iniciar'){
      setActivarIniciar(!activarIniciar)
      setActivarRecientes(false)
      setActivarFavoritos(false)
      setActivarProyectos(false)
      setActivarEquipos(false)
    }
    else if(e.target.name === "Recientes"){
      setActivarRecientes(!activarRecientes)
      setActivarIniciar(false)
      setActivarFavoritos(false)
      setActivarProyectos(false)
      setActivarEquipos(false)
    }
    else if(e.target.name === "Favoritos"){
      setActivarFavoritos(!activarFavoritos)
      setActivarIniciar(false)
      setActivarRecientes(false)
      setActivarProyectos(false)
      setActivarEquipos(false)
    }
    else if(e.target.name === "Proyectos"){
      setActivarProyectos(!activarProyectos)
      setActivarIniciar(false)
      setActivarRecientes(false)
      setActivarFavoritos(false)
      setActivarEquipos(false)
      
      
    }
    else if(e.target.name === "Equipos"){
      setActivarEquipos(!activarEquipos)
      setActivarIniciar(false)
      setActivarRecientes(false)
      setActivarFavoritos(false)
      setActivarProyectos(false)
      
    }
    else if(e.target.name === "Finanzas"){
      setActivarFinanzas(!activarFinazas)
      setActivarIniciar(false)
      setActivarRecientes(false)
      setActivarFavoritos(false)
      setActivarProyectos(false)
      
    }
    else if(e.target.name === "VideoCorfo"){
      router.push(href)
      
    }
    else {
      alert('otra wea')

    }
    //router.push(href)

  }

  
  
  return <div className="w-full h-screen ">
              
            <div className="w-[100%] h-[4.2%] border-b border-gray-100">
              <Navbar
                setActivarPerfil={setActivarPerfil}
                activarPerfil={activarPerfil}
                setActivarConectar={setActivarConectar}
                activarConectar={activarConectar}
                activarSoporte={activarSoporte}
                setActivarSoporte={setActivarSoporte}
                activarConfiguraciones={activarConfiguraciones}
                setActivarConfiguraciones={setActivarConfiguraciones}
                activarNotificacion={activarNotificacion}
                setActivarNotificacion={setActivarNotificacion}
                activarPuntos={activarPuntos}
                setActivarPuntos={setActivarPuntos}
                session={session}
              />


             
            </div>
            {activarNotificacion &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalNotificacion
                setActivar={setActivarNotificacion}
                activarDetalleNotificacion={activarDetalleNotificacion}
                setActivarModalDetalle={setActivarDetalleNotificacion}
                
                />
              </div>
            }
            {activarDetalleNotificacion &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalDetalleNotificaciones
                setActivar={setActivarDetalleNotificacion}
                activarModalConfirmar={activarModalConfirmar}
                setActivarModalConfirmar={setActivarModalConfirmar}
                setActivarNotificacion={setActivarNotificacion}
                
                />
              </div>
            }
            {activarPuntos &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalPuntos
                setActivar={setActivarPuntos}
                
                />
              </div>
            }
            {activarPerfil &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalPerfil
                setActivar={setActivarPerfil}
                
                />
              </div>
            }
            {activarConectar &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalConectar
                setActivar={setActivarConectar}
                />
              </div>
            }
            {activarSoporte &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalSoporte
                setActivar={setActivarSoporte}
                />
              </div>
            } 
            {activarConfiguraciones &&
              <div className="w-[100%] flex justify-end bg-red-400 ">
                <ModalConfiguraciones
                setActivar={setActivarConfiguraciones}
                />
              </div>
          }

          <div className="w-full h-[95%] flex">
                <section className="h-full w-[3%] bg-gray-50 ">
                <Sidebar
                  handleClickSidebar={handleClickSidebar}
                />
                </section>
                {activarIniciar && 
                  <ModalIniciar
                  setActivar={setActivarIniciar}
                  />
                }
                {activarRecientes && 
                  <ModalRecientes
                  setActivar={setActivarRecientes}
                  />
                }
                {activarFavoritos && 
                  <ModalFavoritos
                  setActivar={setActivarFavoritos}
                  />
                }
                {activarProyectos && 
                  <ModalMisProyectos
                  setActivar={setActivarProyectos}
                  session={session}
                  />
                }
                {activarEquipos && 
                  <ModalMisEquipos
                  setActivar={setActivarEquipos}
                  />
                }
                {activarFinazas && 
                  <ModalFinanzas
                  setActivar={setActivarFinanzas}
                  session={session}
                  />
                }
                <div className="w-[97%] h-full ">
                  {children1}
                </div>
              </div>
            

          
              
              
              
          {/* {activarModalConfirmar && 
            <ModalConfirmarAportantes />

          } */}
        </div>
}

export default PageLayout