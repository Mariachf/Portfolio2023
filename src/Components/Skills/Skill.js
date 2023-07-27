import React from "react";
import * as S from "./Skill_Styled";

export default function Main() {
  return (
    <S.Skill>
      <section class="habilidades" id="habilidades">
        <h2>HABILIDADES</h2>
        <div class="linha"></div>
        <section class="logo">
          <div class="html">
            <div class="html-1">
              <h4>HTML5</h4>
              <h3>HTML5</h3>
              <p>
                {" "}
                uma linguagem de marcação utilizada na construção de páginas na
                Web.
              </p>
            </div>
          </div>

          <div class="css">
            <div class="css-1">
              <h4>CSS3</h4>
              <h3>CSS3</h3>
              <p>
                {" "}
                é uma linguagem de folhas de estilos que é utilizada para
                definir como os documentos escritos na linguagem de marcação
              </p>
            </div>
          </div>

          <div class="JS">
            <div class="JS-1">
              <h4>JAVASCRIPT</h4>
              <h3>JAVASCRIPT</h3>
              <p>
                {" "}
                é uma linguagem de programação interpretada estruturada, de
                script em alto nível com tipagem dinâmica fraca e
                multiparadigma.
              </p>
            </div>
          </div>

          <div class="git">
            <div class="git-1">
              <h4>GIT</h4>
              <h3>GIT</h3>
              <p>
                é um sistema de controle de versão distribuído, que atua também
                como um sistema de gerenciamento de código fonte
              </p>
            </div>
          </div>

          <div class="github">
            <div class="github-1">
              <h4>GITHUB</h4>
              <h3>GITHUB</h3>
              <p>
                é uma plataforma de hospedagem de código-fonte e arquivos com
                controle de versão usando o Git.
              </p>
            </div>
          </div>

          <div class="responsivo">
            <div class="responsivo-1">
              <h4>React</h4>
              <h3>React</h3>
              <p>
                React é um framework JavaScript criado pelo Facebook (atual
                Meta) que é usado para criar interfaces de usuário (UI) em
                aplicativos web.
              </p>
            </div>
          </div>
        </section>
      </section>
    </S.Skill>
  );
}
