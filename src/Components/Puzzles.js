import React, { Component } from 'react';
import Word from './Word';
import './temp.css';

class Category extends Component {

  constructor(){

    super()

    this.canvas = document.getElementById("tet");
    this.canvasBack = document.getElementById("tt");
    this.resetButton = document.getElementById("reset");
    this.canvas.getContext("2d");
    this.canvasBack.getContext("2d");
    this.o = 20;
    this.h =0;
    this.k = 0;
    this.l = 0;
    this.m = 0;
    this.hh =0;
    this.kk = 0;
    this.ll = 0;
    this.mm = 0;
    this.width = canvasBack.width -100;
    this.height = canvasBack.height;
    this.off = 10;
  }


  render() {
    return (
      <div className="Puzzles">

      </div>
    );
  }
}

export default Puzzles;
