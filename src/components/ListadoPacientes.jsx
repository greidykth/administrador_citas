import Paciente from "./Paciente"

export const ListadoPacientes = ({pacientes}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 my-6 md:h-screen overflow-y-scroll">
    {pacientes && pacientes.length ? (
      <>
        <h2 className="text-3xl font-bold text-center">Listado Pacientes</h2>
        <p className="text-center mt-3 mb-5">
          Administra tus {''}
          <span className="text-indigo-600">Pacientes y Citas</span>
        </p>
        {pacientes.map((paciente) => (
          
          <Paciente 
          key={paciente.id}
          paciente={paciente} 
          />
          
        ))}
      </>
    ): (
      <>
      <h2 className="text-3xl font-bold text-center">No hay pacientes</h2>
        <p className="text-center mt-3 mb-5">
          Comienza agregando pacientes y {''}
          <span className="text-indigo-600">aparecerán en este lugar</span>
        </p>
      </>

    )}
    </div>
    
  )
}
