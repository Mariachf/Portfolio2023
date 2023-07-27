import styled from "styled-components";

import Js from "../assents/js.webp";
import CSS from "../assents/css.jpg";
import Html from "../assents/html.jpg";
import Git from "../assents/git-logo.jpg";
import Github from "../assents/GitHub.jpg";
import Linguagem from "../assents/reactlogo_4.png";

export const Skill = styled.div`
  .habilidades {
    width: 100%;
    height: 220vh;
    background-color: #000003;
    color: white;
  }

  .habilidades h2 {
    font-size: 70px;
    padding-top: 2%;
    padding-left: 30%;

    font-family: "Orbitron", sans-serif;
  }

  .linha {
    width: 50%;
    border: 4px dashed #fc6879;
    margin-left: 25%;
  }

  .logo {
    padding-top: 2%;
    width: 100%;
    height: 200vh;
    flex-wrap: wrap;
    display: flex;
    
    background-color: #000003;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .JS {
    background-image: url(${Js});
    background-color: #f9e000;
  }

  .css {
    background-image: url(${CSS});
    background-color: #0047bd;
  }

  .html {
    background-image: url(${Html});
    background-color: #e55025;


  }

  .git {
    background-image: url(${Git});
    background-color: #f26248;
  }

  .github {
    background-image: url(${Github});
    background-color: #6e55e4;
  }

  .responsivo {
    background-image: url(${Linguagem});
    background-color: #389ac7;
  }

  .html,
  .css,
  .JS,
  .git,
  .github,
  .responsivo
  {
    width: 20%;
    height: 70vh;
    margin-left: 10%;
    margin-top: 5%;
    background-repeat: no-repeat;
    background-size: contain;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 2%;
    color: white;
    
}
  }


  .JS-1 h4 {
    color: rgb(255, 255, 131);
  }

  .css-1 h4 {
    color: rgb(133, 133, 248);
  }

  .html-1 h4 {
    color: #ff9500;
  }

  .git-1 h4 {
    color: rgb(253, 166, 134);
  }

  .github-1 h4 {
    color: #2220a8;
  }

  .responsivo-1 h4 {
    color: #0073a8;
  }

  .logo h4 {
    margin-top: 65%;
    font-size: 12px;
    margin-left: 5%;
  }

  .logo h3 {
    margin-top: 5%;
    margin-left: 5%;
    font-size: 22px;
    text-align: center;
  }

  .logo p {
    margin-top: 5%;
    font-size: 20px;
    margin-left: 5%;
    width: 90%;
    text-align: center;
  }

  .responsivo-1 P {
    font-size: 18px;
  }

  
`;
