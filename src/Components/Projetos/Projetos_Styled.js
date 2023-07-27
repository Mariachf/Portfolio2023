import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import Avatar from "../assents/avatar.png";
import Page from "../assents/page..png";
import Rick from "../assents/projeto.png";
import Star from "../assents/star wars.png";
import Ada from "../assents/ada.png";

export const Projetos = styled.div`
  .linha-2 {
    width: 70vh;
    border: #fc6879 dashed 2px;
    margin-left: 34.5%;
    margin-bottom: 3%;
  }

  #projetos {
    background-color: #000003ef;
    height: 30vh;
  }
  #projetos h2 {
    color: white;
    font-size: 55px;
    margin-left: 38%;
    padding-top: 5%;
    font-family: "Orbitron", sans-serif;
  }

  .img-1 {
    background-image: url(${Avatar});
  }

  .img-2 {
    background-image: url(${Page});
  }

  .img-4 {
    background-image: url(${Rick});
  }

  .img-6 {
    background-image: url(${Star});
  }

  .img-1,
  .img-2,
  .img-4,
  .img-6 {
    width: 80vh;
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .text-1 {
    background-color: #6d55e493;
  }

  .text-2 {
    background-color: #aaaaaa93;
  }

  .text-4 {
    background-color: #cf6f5d79;
  }

  .text-6 {
    background-color: rgba(167, 5, 5, 0.596);
  }

  .text-1,
  .text-2,
  .text-4,
  .text-6 {
    width: 80vh;
    height: 50vh;
    opacity: 0;
    transition: 1s all;
  }

  .text-1:hover,
  .text-2:hover,
  .text-4:hover,
  .text-6:hover {
    opacity: 1;
    transform: scale(1.06);
  }

  .contet {
    width: 100%;
    height: 139vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    background-color: #000003ef;
  }
  .contet h3 {
    color: white;
    font-size: 40px;
    padding-left: 8%;
    padding-top: 5%;
  }

  .contet p {
    padding-left: 8%;
    padding-top: 2%;
    color: white;
    font-size: 20px;
    width: 80%;
  }

  .contet button {
    width: 10vh;
    height: 5vh;
    border: 1px solid white;
    border-radius: 4px;
    margin-top: 9%;
    background-color: transparent;
  }

  .contet a {
    text-decoration: none;
    color: white;
  }

  .direita {
    margin-left: 8%;
  }
`;
