import React, { Component } from "react";
import "./App.scss";
import NavBar from "./componentes/NavBar/NavBar";
import ListaCidade from "./componentes/ListaCidade";
import Footer from "./componentes/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

/*Classe principal para renderizar a pagina*/
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ListaCidade />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
