import React, { Component } from "react";
import Cidade from "../Cidade";
import "./listacidade.scss";
import { DadosCidade } from "../../DadosCidade";

export default class ListaCidade extends Component {
  state = {
    cidade: DadosCidade,
  };

  removerCidade = (id) => {
    const { cidade } = this.state;

    /*Filtrar cidade pelo id*/
    const ArrayCidade = cidade.filter((cidade) => cidade.id !== id);

    /*Alterar o "estado" da cidade*/
    this.setState({
      cidade: ArrayCidade,
    });
  };

  render() {
    const { cidade } = this.state;

    return (
      <section className="listaCidade">
        {cidade.map((cidade) => (
          <Cidade
            key={cidade.id}
            cidade={cidade}
            removerCidade={this.removerCidade}
          ></Cidade>
        ))}
      </section>
    );
  }
}
