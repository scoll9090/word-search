import React, { Component } from 'react';
import Word from './Word';
import './temp.css';

class Category extends Component {

  constructor(){

      super()

      this.state = {

          showCanvas:false,
          puzzleIndex:0

      }


  }

  handleClick(index){
    console.log('clicked puzzle show canvas maybe',index)
    this.setState({showCanvas:true,puzzleIndex:index})
  }
  handleClose(){
    this.setState({showCanvas:false})


  }
  render() {
    let showCanvas = this.state.showCanvas;
    console.log(showCanvas)
    let canvas = showCanvas ? <Word index={this.state.puzzleIndex} cateIndex={this.props.cateIndex} puzzle={this.props.category.categoryPuzzles[this.state.puzzleIndex]}
    handleClose={this.handleClose.bind(this)}></Word> :null;
    let puzzles = this.props.category.categoryPuzzles.map((puzzle,index,p)=>{

    return <div onClick={this.handleClick.bind(this,index,this.props.cateIndex)} className="puzzle-list" >{puzzle.puzzleName}</div>

    })

    return (
      <div className="Category">
          <div className="head">{this.props.category.categoryName}</div>
          {puzzles}
          {canvas}
      </div>
    );
  }
}

export default Category;
