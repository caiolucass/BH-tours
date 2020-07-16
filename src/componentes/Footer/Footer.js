import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          City<span>Tours</span>
        </h3>

        <p class="footer-links">
          <a href="#" class="link-1"></a>

          <a href="#">Home</a>

          <a href="#">Sobre</a>

          <a href="#">Tours</a>
        </p>

        <p class="footer-company-name">CityTours © 2020</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fas fa-map-marker-alt"></i>
          <p>
            <span>1400 Av. Álvares Cabral</span> Belo Horizonte, Minas Gerais
          </p>
        </div>

        <div>
          <i class="fas fa-phone"></i>
          <p>+55 31 98896-6417</p>
        </div>

        <div>
          <i class="fas fa-envelope"></i>
          <p>
            <a href="mailto:caiolfsantoss@gmail.com">caiolfsantoss@gmail.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>Sobre a companhia</span>
          Site realizado para testar procedimentos de estudos, a fim de entender
          a estrutura web e aprender mais sobre React js. Desenvolvendo
          habilidades fornecidas pelo site{" "}
          <a href="https://www.Udemy.com" target="_blank">
            {" "}
            Udemy.com
          </a>
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/caio-lucas-3886a4140/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a href="#" target="-blank">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
