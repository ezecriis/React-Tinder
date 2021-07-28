import { useState, useEffect } from "react";
import "./CardsTinder.css";
import CardPersona from "react-tinder-card";
import database from "../firebase";

const CardsTinder = () => {
  const [persona, setPersona] = useState([]);

  useEffect(() => {
    const desuscribirse = database
      .collection("personas")
      .onSnapshot((snapshot) =>
        setPersona(snapshot.docs.map((doc) => doc.data()))
      );
    return () => {
      desuscribirse();
    };
  }, []);

  return (
    <div className="cardsTinder">
      <div className="cardsTinder__conteiner">
        {persona.map((persona) => (
          <CardPersona
            className="swipe"
            key={persona.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${persona.url})` }}
            >
              <h2> {persona.nombre} </h2>
            </div>
          </CardPersona>
        ))}
      </div>
    </div>
  );
};

export default CardsTinder;
