
import InternoModalCrearProyecto from "./[CompInternos]/InternoModalCrearProyecto";

const ModalCrearProyecto = ({abrirModal,  posicion, setAbrirModal, session}) => {
  return(
    <>
      <InternoModalCrearProyecto
        session={session}
        setAbrirModal={setAbrirModal}
      />
    </>
  )
}

export default ModalCrearProyecto