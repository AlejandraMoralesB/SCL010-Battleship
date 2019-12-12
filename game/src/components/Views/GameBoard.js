import React, { Component, Fragment } from "react";
import Square from "../Buttons/Square";
import "./BoardOne.css";
import "./BoardTwo.css";
import "./GameBoard.css";
import "../../components/Buttons/Square.css";
import { Col, Row } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import Modal from "react-modal";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.piecesOne = []; //piezas tablero player 01
    this.piecesTwo = []; //piezas tablero player 02
    this.hitsFailEnemyOne = []; //Tablero enemigo player 02 hits fail
    this.hitsFailEnemyTwo = []; //Tablero enemigo player 01 hits fail
    this.hitsDamagedEnemyOne = []; //Tablero enemigo player 02 hits damaged
    this.hitsDamagedEnemyTwo = []; //Tablero enemigo player 01 hits damaged

    this.renderEnemyBoardOne = this.renderEnemyBoardOne.bind(this);
    this.handlePiecesEnemyBoardOne = this.handlePiecesEnemyBoardOne.bind(this);
    this.renderBoardTwo = this.renderBoardTwo.bind(this);
    this.handlePiecesPlayerTwo = this.handlePiecesPlayerTwo.bind(this);
    this.renderEnemyBoardTwo = this.renderEnemyBoardTwo.bind(this);
    this.handlePiecesEnemyBoardTwo = this.handlePiecesEnemyBoardTwo.bind(this);
    this.renderBoardOne = this.renderBoardOne.bind(this);
    this.handlePiecesPlayerOne = this.handlePiecesPlayerOne.bind(this);

    this.state = {
      playerOneIsNext: true,
      arrayPiecesPlayerOne: this.piecesOne,
      arrayPiecesPlayerTwo: this.piecesTwo,
      isOpenBoardTwo: false
    };
    //Modal Estado
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    //modal1
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  //Modal1

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  //modal o
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  // Modal Instrucciones

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  //Scroll en las Páginas.

  //SCROLL TOP DEL GAMEBOARD
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  //SCROLL BOTTOM DEL GAMEBOARD
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  //PUSHEAR LOS ARREGLOS DE CADA JUGADOR
  componentDidMount(propKey) {
    this.hitsFailEnemyTwo.push(propKey);
  }

  // FUNCION DE CAMBIO DE ESTADO BOARD 01
  handlePiecesPlayerOne(event, propKey) {
    event.preventDefault();
    if (this.piecesOne.length < 5) {
      this.piecesOne.push(propKey);
      console.log("PiecesOne", this.piecesOne);
      event.target.className = "btn-pieces-greta";
    } else {
      alert("It´s your turn to hit Donald!");
    }
    return this.piecesOne;
  }

  // FUNCION DE IMPRIMIR BOARD 01
  renderBoardOne() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `L${x}${y}`;
        console.log("board", board);
        cellInfo = {
          key: key,
          height: x,
          width: y
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handlePiecesPlayerOne}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO ENEMY BOARD 02
  handlePiecesEnemyBoardTwo(event, propKey) {
    event.preventDefault();
    if (this.piecesOne.includes(propKey)) {
      event.target.className = "btn-hit-pieces-two";
    } else {
      event.target.className = "btn-hit-pieces-two-fail";
      this.hitsFailEnemyTwo.push(propKey);
      console.log("piecesOneDamaged", this.piecesOneDamaged);
    }
  }

  // FUNCION DE IMPRIMIR BOARD ENEMY 02
  renderEnemyBoardTwo() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `L${x}${y}`;
        console.log("board", board);
        cellInfo = {
          key: key,
          height: x,
          width: y
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handlePiecesEnemyBoardTwo}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO BOARD 02
  handlePiecesPlayerTwo(event, propKey) {
    if (this.piecesTwo.length < 5) {
      this.piecesTwo.push(propKey);
      console.log("PiecesTwo", this.piecesTwo);

      event.target.className = "btn-pieces-donald";
    } else {
      alert("It´s your turn to hit Greta!");
    }
    return this.piecesTwo;
  }
  // FUNCION DE IMPRIMIR BOARD 02
  renderBoardTwo() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `R${x}${y}`;
        console.log("board", board);
        cellInfo = {
          key: key,
          height: x,
          width: y
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handlePiecesPlayerTwo}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO ENEMY BOARD 01
  handlePiecesEnemyBoardOne(event, propKey) {
    event.preventDefault();
    if (this.piecesTwo.includes(propKey)) {
      console.log("HOLA");
      event.target.className = "btn-pieces-donald";
    } else {
      event.target.className = "btn-hit-pieces-two-fail";
    }
  }

  // FUNCION DE IMPRIMIR ENEMY BOARD 02
  renderEnemyBoardOne() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `R${x}${y}`;
        console.log("board", board);
        cellInfo = {
          key: key,
          height: x,
          width: y
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handlePiecesEnemyBoardOne}
        height={e.height}
        width={e.width}
      />
    ));
  }

  // // open and close in the same button "Create Event"
  // handleBoardTwoIsOpen = () => {
  //   this.setState(prevState => ({
  //     isOpenBoardTwo: !prevState.isOpenBoardTwo
  //   }));
  // };

  render() {
    return (
      <Fragment>
        <Col className="game">
          <Col className="game-board">
            <img
              className="logo"
              src={require("../Views/img/BATTLE OF POWER-logo-gameboard.svg")}
              alt="logo-room"
            />
            <div className="table" id="greta">
              <Row>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/BATTLE OF POWER-greta.png")}
                    alt="greta"
                  />
                  <p> Payer One | My Board </p>

                  <Col xs="11">
                    <div className="board">
                      <div className="border1-row">
                        {this.renderBoardOne(25)}
                      </div>
                    </div>
                  </Col>
                </Col>
                <Col xs="4">
                  <Row>
                    <img
                      className="VS"
                      src={require("./img/BATTLE OF POWER-VS.svg")}
                      alt="trump"
                    />
                  </Row>
                  <div>
                    <button
                      className="btn-instruction"
                      onClick={this.openModal}
                    >
                      INSTRUCTIONS
                    </button>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                    >
                      <p
                        className="text-1"
                        ref={subtitle => (this.subtitle = subtitle)}
                      >
                        {" "}
                        <big>
                          <b>
                            <h3 className="dialog-title">
                              Instrucciones: “Battle Of Power” ( Spanish)
                            </h3>
                          </b>
                        </big>{" "}
                        <br /> 1- En el primer tablero posicionar las piezas en
                        las casillas siendo tu zona de juego el cual permanecerá
                        oculta para tu enemigo.
                        <br />
                        2-Una vez posicionadas tus piezas comienzas la partida,
                        no podrás volver a cambiarlos de posición.
                        <br />
                        3- En el momento que los dos jugadores habéis pulsado
                        “Comenzar partida”, Battle Of Power empieza.
                        <br />
                        4-Aparecerán en tu pantalla los dos tableros: el de
                        posición izquierda (donde colocaste las piezas ) y el
                        principal, derecha, donde realizarás y verás tus
                        disparos, y las posiciones tocadas y debilitadas de tu
                        oponente.
                        <br />
                        5-El primer jugador que dispara es el que ha creado la
                        partida.
                        <br />
                        6-Podrás disparar en cualquier casilla del tablero,
                        salvo en las que ya has disparado.
                        <br />
                        7-No puedes deshacer disparos ni propios ni de tus
                        oponentes.
                        <br />
                        8-Es un juego por turnos: haces tu disparo, si es "Árbol
                        verde " el turno pasa a tu oponente; si "tocas" y/o
                        debilitar el poder de tu enemigo.
                        <br />
                        9-Gana el jugador que antes debilite el mundo de su
                        enemigo y adivine las posición de todas sus piezas.
                        <br />
                        10-Suerte y a salvar el mundo!
                        <br />
                      </p>
                      <button className="btn-close" onClick={this.closeModal}>
                        GO TO PlAY!
                      </button>
                    </Modal>
                  </div>
                  <button className="btn-start" onClick={this.scrollToBottom}>
                    DONALD TURN
                  </button>
                  <div>
                    <button onClick={this.handleOpenModal}>
                      Winner Donald
                    </button>
                    <ReactModal
                      isOpen={this.state.showModal}
                      contentLabel="onRequestClose Example"
                      onRequestClose={this.handleCloseModal}
                      className="Modal"
                      overlayClassName="Overlay"
                    >
                      <br />
                      <br />
                      <h3>
                        <b>The Winner is : DONALD TRUMP!</b>{" "}
                      </h3>
                      <img
                        className="giftdonald"
                        src="https://media.giphy.com/media/3oKIPf1BaBDILVxbYA/giphy.gif"
                        alt="funny trump"
                      ></img>{" "}
                      <button
                        className="btn-close2"
                        onClick={this.handleCloseModal}
                      >
                        PLAY AGAIN
                      </button>
                    </ReactModal>
                  </div>
                </Col>

                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/BATTLE OF POWER-trump.png")}
                    alt="trump"
                  />
                  <p> Player One | Board Enemy </p>

                  <Col xs="11">
                    <div className="board">
                      <div className="boardEnemy">
                        {this.renderEnemyBoardOne(25)}
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </div>
            <Row>
              <div className="table" id="Donald">
                <Row>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/BATTLE OF POWER-trump.png")}
                      alt="trump"
                    />
                    <p>Player Two | My Board</p>

                    <Col xs="11">
                      <div className="board">
                        <div className="border2-row">
                          {this.renderBoardTwo(25)}
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col xs="4">
                    <button className="btn-start" onClick={this.scrollToTop}>
                      GRETA TURN
                    </button>
                  </Col>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/BATTLE OF POWER-greta.png")}
                      alt="greta"
                    />
                    <p> Payer Two | Board Enemy </p>

                    <Col xs="11">
                      <div className="board">
                        <div className="border2-row">
                          {this.renderEnemyBoardTwo(25)}
                        </div>
                      </div>
                    </Col>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Col>
      </Fragment>
    );
  }
}
export default GameBoard;
