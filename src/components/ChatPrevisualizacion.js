import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./ChatPrevisualizacion.css";

function ChatPrevisualizacion({ nombre, mensaje, timestamp, imgPerfil }) {
  return (
    <Link to={`/chat/${nombre}`}>
      <div className="chatPrevisualizacion">
        <Avatar
          className="chatPrevisualizacion__imagen"
          alt={nombre}
          src={imgPerfil}
        />
        <div className="chatPrevisualizacion__detalles">
          <h2> {nombre} </h2>
          <p> {mensaje} </p>
        </div>
        <p className="chatPrevisualizacion__timestamp"> {timestamp} </p>
      </div>
    </Link>
  );
}

export default ChatPrevisualizacion;
