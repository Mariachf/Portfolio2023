import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Header = styled.header`
  width: 100%;
  height: 100vh;
  color: white;
  background-color: black;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  .sub {
    width: 100%;
    height: 13vh;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    position: fixed;
  }

  .nav-1,
  .menu {
    display: flex;
    justify-content: space-between;
  }

  .menu {
    margin-right: 2%;
    list-style: none;
    margin-top: 1.5%;
    width: 50%;
  }

  .nav-1 a {
    color: white;
    text-decoration: none;
    font-size: 23px;
    transition: 1s;
  }

  .nav-1 a:hover {
    color: #ff8997;
  }

  .nav-1 p {
    font-size: 23px;
    margin-top: 0.5px;
    margin-left: 4%;
  }

  .h2-1 {
    color: #ff8997;
    font-size: 40px;
  }

  .nome {
    background-color: black;
    width: 100%;
    height: 100vh;
  }

  .header-2 {
    padding-top: 15%;
    padding-left: 6%;
  }

  .div-img {
    margin-top: 3%;
    margin-left: 5%;
  }
  .div-img img {
    width: 7vh;
    height: 7vh;
    margin-left: 1%;
    transition: 1s;
  }

  .div-img img:hover {
    width: 8vh;
    height: 8vh;
  }

  .header-2 h2 {
    letter-spacing: 7px;
    color: #ff8997;
    font-family: "Montserrat", sans-serif;
    font-size: 25px;
  }

  h1 {
    font-family: "Rajdhani", sans-serif;
    letter-spacing: 2px;
    font-size: 14vh;
    width: 60%;
  }

  .button {
    font-family: Roboto, sans-serif;
    font-weight: 0;
    font-size: 14px;
    color: #fff;
    background-color: #ff8997;
    padding: 10px 30px;
    border: solid #ff8997 2px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition: 1000ms;
    margin-top: 2em;
    margin-left: 5em;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: white;
    transform: translateY(0);
  }

  .button:hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;

    border: solid 2px #ff8997;
  }
`;
