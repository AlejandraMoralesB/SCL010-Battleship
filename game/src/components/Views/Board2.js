import React, { Component } from "react";
import "./Board2.css";
import { Container } from "reactstrap";
import SquareTwo from "../Buttons/SquareTwo";

class Board2 extends Component {
  renderSquare(i) {
    return (
      <SquareTwo
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div className="board-enemy">
        <Container>
          <div className="border2-row">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="border2-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
          </div>
          <div className="border2-row">
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
        </Container>
      </div>
    );
  }
}

export default Board2;
