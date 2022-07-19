import { useState } from "react"
import Error from "./Error";

export const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);


    function crearId() {
        const aleatorio = Math.random().toString(36).substr(2);
        const fechaHoy = Date.now().toString(36);

        return fechaHoy + aleatorio;
        
    }

    function handleSubmit(e) {
        e.preventDefault();

        //Validar Form
        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true);
            return;
        }

        //Crear objeto paciente
        const objetoPaciente = {
            id: crearId(),
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        setPacientes([...pacientes, objetoPaciente]);

        //Limpiar Formulario
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

        setError(false);
        
    }

  return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 my-6">
            <h2 className="text-3xl font-bold text-center">Seguimiento Pacientes</h2>
            <p className="text-center mt-3 mb-5">Añade Pacientes y {''}
                <span className="text-indigo-600">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-gray-200 shadow-2xl p-4 rounded-lg text-left"
            >
                {error && 
                    <Error>Todos los campos son obligatorios</Error>
                }
                <div className="mb-3">
                    <label 
                        className="block font-bold uppercase text-indigo-600"
                        htmlFor="nombre"
                    >NOMBRE MASCOTA</label>
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
                    >PROPIETARIO MASCOTA</label>
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

                    >EMAIL PROPIETARIO</label>
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

                    >FECHA ALTA</label>
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

                    >SINTOMAS</label>
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
                    value="Agregar Paciente"
                />
            </form>
        
        </div>
  )
}
