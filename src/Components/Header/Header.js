import React from "react";
import * as S from "./Header_styled";

export default function Header() {
  return (
    <S.Header>
      <section class="sub">
        <nav class="nav-1">
          <p>
            <span class="h2-1"></span>Eduarda_Fonseca<span class="h2-1"></span>
          </p>
          <ul class="menu">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sobre-mim">Sobre mim</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#projetos">Projetos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </section>

      <section class="nome" id="inicio">
        <div class="header-2">
          <h2>Olá, Meu nome é</h2>
          <h1>EDUARDA FONSECA.</h1>
          <h2>Desenvolvedora front-end</h2>
        </div>

        <button className="button">
          <a
            href="../assents/CV MARIA EDUARDA CHAGAS - FRONT END.pdf"
            target="_blank"
            download
            className="a"
          >
            Download CV
          </a>
        </button>
      </section>
    </S.Header>
  );
}
