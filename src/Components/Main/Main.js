import React from "react";
import * as S from "./Main_styled";
import Menina from "../assents/port.png";

export default function Main() {
  return (
    <S.Main>
      <section class="sobre" id="sobre-mim">
        <img src={Menina} alt="imagem de uma garota" />
        <div class="mim">
          <h2> SOBRE MIM</h2>
          <div class="linha-1"></div>
          <h4>
            Sou apaixonada por tecnologia e decidi que essa seria minha área de
            formação. Comecei estudando a Ciência da Computação com Python. Hoje
            tenho conhecimento nas principais linguagens de marcação e
            programação voltada ao Front-end, bem como conhecimento em
            desenvolvimento de Web. Tenho perfil propositivo, observador e
            proativo. Considero minha resiliência, facilidade de adaptação e
            inteligência emocional, grandes diferenciais competitivos. Sou uma
            pessoa dedicada com habilidades e técnicas que agregam valor nas
            entregas e possibilitam o atingimento assertivos dos objetivos
            esperados.
          </h4>
        </div>
      </section>
    </S.Main>
  );
}
