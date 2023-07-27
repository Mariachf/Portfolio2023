import React from "react";
import * as S from "./Footer_Styled";
import Git from "../assents/github-1.png";
import Email from "../assents/o-email (1).png";
import Linkedin from "../assents/linkedin-1.png";

export default function Footer() {
  return (
    <S.Footer>
      <section class="sec-1">
        <nav id="contato">
          <ul>
            <li>
              <a href="https://github.com/Mariachf" target="_blank">
                <img src={Git} alt="Github" />
              </a>
            </li>
            <li>
              <a href="mailto:me72068@gmail.com" target="_blank">
                <img src={Email} alt="E-mail" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maria-eduarda-fonseca-109862173/"
                target="_blank"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </nav>

        <p>&copy; Desenvolvido por Eduarda Fonseca - 2023</p>
      </section>
    </S.Footer>
  );
}
