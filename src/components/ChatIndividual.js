import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatIndividual.css";

function ChatIndividual() {
  const adminEnvio = (e) => {
    e.preventDefault();
    setMensajes([...mensajes, { mensaje: input }]);
    setInput("");
  };

  const [input, setInput] = useState("");
  const [mensajes, setMensajes] = useState([
    {
      nombre: "Sofia",
      imagen: "...",
      mensaje: "hey",
    },
    {
      nombre: "Lauri",
      imagen: "...",
      mensaje: "holiiis",
    },
    {
      nombre: "Mica",
      imagen: "...",
      mensaje: "Alo!",
    },
    {
      nombre: "Cami",
      imagen: "...",
      mensaje: "Como estas?",
    },
  ]);

  return (
    <div className="chatIndividual">
      <p className="chatIndividual__timestamp">
        CONSEGUISTE UN MATCH EL 19/1/21
      </p>
      {mensajes.map((mensaje) =>
        mensaje.nombre ? (
          <div className="chatIndividual__mensaje">
            <Avatar
              className="chatIndividual__avatar"
              alt={mensaje.nombre}
              src={mensaje.imagen}
            />
            <p className="chatIndividual__mensaje__texto">
              {" "}
              {mensaje.mensaje}{" "}
            </p>
          </div>
        ) : (
          <div className="chatIndividual__mensaje">
            <p className="chatIndividual__mensaje__propio">{mensaje.mensaje}</p>
          </div>
        )
      )}

      <form className="chatIndividual__input">
        <input
          className="chatIndividual__input__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button
          onClick={adminEnvio}
          type="submit"
          className="chatIndividual__input__send"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ChatIndividual;
