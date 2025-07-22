
import InternoModalCrearProyecto from "./[CompInternos]/InternoModalCrearProyecto";

const ModalCrearProyecto = ({abrirModal,  posicion, setAbrirModal, session}) => {
  return(
    <div className="w-full">
      <InternoModalCrearProyecto
        session={session}
        setAbrirModal={setAbrirModal}
      />
    </div>
  )
}

export default ModalCrearProyecto