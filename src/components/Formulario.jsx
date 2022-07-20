import { useEffect, useState } from "react";
import Alert from "./Alert";

export const Formulario = ({ pacientes, setPacientes, setPaciente, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [alert, setAlert] = useState("");

  
  useEffect(() => {
    if(Object.keys(pacientes).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  function crearId() {
    const aleatorio = Math.random().toString(36).substr(2);
    const fechaHoy = Date.now().toString(36);

    return fechaHoy + aleatorio;
  }

  function handleSubmit(e) {
    e.preventDefault();

    //Validar Form
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setAlert("danger");
      return;
    }

    //Crear objeto paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if(paciente.id){
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map( (pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados);
      setPaciente({});
      setAlert("success");
      setTimeout(() => {
          setAlert("");
      }, 3000);
      
    }else{
      objetoPaciente.id=crearId();
      setPacientes([...pacientes, objetoPaciente]);
      
      setAlert("success");
      setTimeout(() => {
          setAlert("");
      }, 3000);

    }


    //Limpiar Formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 my-6">
      <h2 className="text-3xl font-bold text-center">Seguimiento Pacientes</h2>
      <p className="text-center mt-3 mb-5">
        Añade Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 shadow-2xl p-4 rounded-lg text-left"
      >
        {alert !== '' && <Alert alert={alert} />}

        <div className="mb-3">
          <label
            className="block font-bold uppercase text-indigo-600"
            htmlFor="nombre"
          >
            NOMBRE MASCOTA
          </label>
          <input
            id="nombre"
            type="text"
            className="w-full p-2 rounded-md mt-1 border-2"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block font-bold uppercase text-indigo-600"
            htmlFor="propietario"
          >
            PROPIETARIO MASCOTA
          </label>
          <input
            id="propietario"
            type="text"
            className="w-full p-2 rounded-md mt-1 border-2"
            placeholder="Propietario de la mascota"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block font-bold uppercase text-indigo-600"
            htmlFor="email"
          >
            EMAIL PROPIETARIO
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 rounded-md mt-1 border-2"
            placeholder="Email propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block font-bold uppercase text-indigo-600"
            htmlFor="fecha"
          >
            FECHA ALTA
          </label>
          <input
            id="fecha"
            type="date"
            className="w-full p-2 rounded-md mt-1 border-2"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            className="block font-bold uppercase text-indigo-600"
            htmlFor="sintomas"
          >
            SINTOMAS
          </label>
          <textarea
            id="sintomas"
            type="text"
            className="w-full p-2 rounded-md mt-1 border-2"
            placeholder="Sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer rounded-md transition-colors"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente" }
        />
      </form>
    </div>
  );
};
