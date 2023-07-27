import React from "react";
import * as S from "./Projetos_Styled";

export default function Main() {
  return (
    <S.Projetos>
      <section id="projetos">
        <h2>PROJETOS</h2>
        <div class="linha-2"></div>
      </section>

      <section class="contet">
        <div class="img-1">
          <div class="text-1">
            <h3>Avatar</h3>
            <p>Projeto feito com REACT e integrado com API.</p>
            <button class="direita">
              <a href="https://github.com/Mariachf/Avatar" target="_blank">
                GitHub
              </a>
            </button>{" "}
            <button>
              <a href="https://id0vz8.csb.app/" target="_blank">
                Link
              </a>
            </button>
          </div>
        </div>

        <div class="img-2">
          <div class="text-2">
            <h3>Rick and Morty </h3>
            <p>Projeto feito com REACT e integrado com API.</p>
            <button class="direita">
              <a
                href="https://github.com/Mariachf/Rick_and_morty"
                target="_blank"
              >
                GitHub
              </a>
            </button>{" "}
            <button>
              <a href=" https://f8zdhc.csb.app/" target="_blank">
                Link
              </a>
            </button>
          </div>
        </div>

        <div class="img-4">
          <div class="text-4">
            <h3>Escola de Sax</h3>
            <p>
              Projeto desenvolvido com REACT estilizado com styled-components.
            </p>
            <button class="direita">
              <a href="https://github.com/Mariachf/projeto_sax" target="_blank">
                GitHub
              </a>
            </button>{" "}
            <button>
              <a href="https://pjk4sh.csb.app/" target="_blank">
                Link
              </a>
            </button>
          </div>
        </div>

        <div class="img-6">
          <div class="text-6">
            <h3>Star Wars</h3>
            <p>
              Projeto Final do modúlo 1 do VWB com as linguagens de marcação
              HTML e CSS
            </p>
            <button class="direita">
              <a href="https://github.com/Mariachf/Final" target="_blank">
                GitHub
              </a>
            </button>{" "}
            <button>
              <a href="https://mariachf.github.io/Final/" target="_blank">
                Link
              </a>
            </button>
          </div>
        </div>
      </section>
    </S.Projetos>
  );
}
