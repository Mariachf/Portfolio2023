import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 40vh;
  background-color: #000003;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 20px;

  img {
    width: 8vh;
    height: 8vh;
    filter: grayscale(1);
    transition: all 1s;
  }

  img:hover {
    filter: grayscale(0);
  }

  p {
    text-align: center;
    font-size: 12px;
    font-family: "Orbitron", sans-serif;
  }

  ul {
    display: flex;
    margin-left: 41%;
    margin-bottom: 2em;
    padding-top: 5%;
    list-style: none;
  }

  li {
    margin-left: 3%;
  }
`;
