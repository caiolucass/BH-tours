import React, { Component } from "react";
import "./cidade.scss";

export default class cidade extends Component {
  state = {
    MostrarInfo: false,
  };

  /*Alterar o estado se nao for falso*/
  InfoCidade = () => {
    this.setState({ MostrarInfo: !this.state.MostrarInfo });
  };

  render() {
    const { id, img, cidade, nome, info } = this.props.cidade;

    /*Excluir cidade*/
    const { removerCidade } = this.props;

    return (
      <article className="cidade">
        <div className="img-container">
          <img src={img} alt="imagem da cidade"></img>

          <span className="close-btn" onClick={() => removerCidade(id)}>
            <i className="fa fa-window-close"></i>
          </span>
        </div>

        <div className="info-cidade">
          <h3>{cidade}</h3>
          <h4>{nome}</h4>

          <h5>
            informação{" "}
            <span onClick={this.InfoCidade}>
              <i className="fa fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.MostrarInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
