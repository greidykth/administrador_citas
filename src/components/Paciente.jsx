
const Paciente = ({ paciente, eliminarPaciente, setPaciente}) => {

    const {nombre, propietario, fecha, email, sintomas, id} = paciente;

    function handleEliminar() {
        if (confirm(`Esta seguro de eliminar el paciente: ${nombre}`)) {
            eliminarPaciente(id);
        }    
    }

  return (
    <div className="m-3 bg-white shadow-lg p-5 rounded-xl border">
      <p className="font-bold text-xl text-indigo-600">Nombre: {""}
        <span className="text-black font-normal text-xl">{nombre}</span>
      </p>
      <p className="font-bold text-xl text-indigo-600">Propietario: {""}
        <span className="text-black font-normal  text-xl">{propietario}</span>
      </p>
      <p className="font-bold text-xl text-indigo-600">Fecha de alta: {""}
        <span className="text-black font-normal  text-xl">{fecha}</span>
      </p>
      <p className="font-bold text-xl text-indigo-600">Email: {""}
        <span className="text-black font-normal  text-xl">{email}</span>
      </p>
      <p className="font-bold text-xl text-indigo-600">Sintomas: {""}
        <span className="text-black font-normal text-xl">{sintomas}</span>
      </p>
      <div className="mt-3 flex justify-end">
        <button 
            onClick={() => setPaciente(paciente)}
            className="bg-indigo-600 text-white uppercase font-bold mr-3 p-2 rounded-md">
            Editar
        </button>
        <button 
            className="bg-red-600 text-white uppercase font-bold p-2 rounded-md"
            onClick={handleEliminar}
            >
            Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
