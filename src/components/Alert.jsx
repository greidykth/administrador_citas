const Alert = ({ alert }) => {
  console.log(`Alert: ${alert}`);

  let text = "";
  let style = "bg-red-600";
  if (alert === "success") {
    text = "Datos guardados correctamente";
    style = "bg-green-600";
  } else {
    text = "Todos los campos son obligatorios";
  }
  return (
    <div
      className={`text-center font-bold text-white uppercase p-2 mb-3 ${style}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Alert;
