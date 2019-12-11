import React, { Component } from "react";
import SquareOne from "../Buttons/SquareOne";
import "./Board1.css";
import { Container } from "reactstrap";

class Board1 extends Component {
  renderSquare(i) {
    return (
      <SquareOne
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div className="board-me">
        <Container>
          <div className="border1-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="border1-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="border1-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </Container>
      </div>
    );
  }
}

export default Board1;
