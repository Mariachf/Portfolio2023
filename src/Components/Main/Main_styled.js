import styled from "styled-components";

export const Main = styled.main`
  .sobre {
    display: flex;
    width: 100%;
    height: 100vh;
    padding-top: 5%;
    background-color: #000003ef;
  }
  .mim {
    width: 50%;
    margin-left: 15%;
  }

  .mim h2 {
    font-size: 30px;
    text-align: center;
    font-family: "Orbitron", sans-serif;
    color: #fff;
  }

  .linha-1 {
    width: 40%;
    border: 4px dashed #fc6879;
    margin-left: 29%;
    margin-top: 1%;
  }

  .mim h4 {
    width: 80%;
    height: 20vh;
    font-size: 23px;
    color: #fff;
    padding-left: 15%;
    text-align: justify;
    padding-top: 5%;
    padding-left: 10%;
  }
  .sobre img {
    width: 80vh;
    height: 80vh;
    border-radius: 60%;

    transition: 1s;
    position: relative;
    left: 6em;
  }
`;
