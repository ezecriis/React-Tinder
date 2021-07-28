import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CardsTinder from "./components/CardsTinder";
import BotonesSwipe from "./components/BotonesSwipe";
import ListadoChats from "./components/ListadoChats";
import ChatIndividual from "./components/ChatIndividual";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route path="/chat/:persona">
            <Header botonRetroceder="/chats" />
            <ChatIndividual />
          </Route>

          <Route path="/chats">
            <Header botonRetroceder="/" />
            <ListadoChats />
          </Route>
          
          <Route path="/">
            <Header/>
            <CardsTinder />
            <BotonesSwipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
