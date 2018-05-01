import React, { Component } from 'react';
import './temp.css';

class SaveWord{

	constructor(word,index,x1,x2,y1,y2){

		this.word = word;
		this.index = index;
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;

	}

}
class Word extends Component {

  constructor(){

    super()


    this.o = 20;
    this.x2Loc = 0;
    this.y2Loc = 0;
    this.x1Index =0;
    this.y1Index = 0;
    this.off = 10;
    this.listWidth = 120;
    this.yspace = 1.5;
    this.Word = this.Word.bind(this)
    this.Strike = this.Strike.bind(this)
    this.Reset = this.Reset.bind(this)
    this.mouseDown = this.mouseDown.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.mouseMove = this.mouseMove.bind(this)
    this.Letter = this.Letter.bind(this)
    this.draw = this.draw.bind(this)
    this.drawBack = this.drawBack.bind(this)
    this.check = this.check.bind(this)
    this.loadSolved = this.loadSolved.bind(this)
  }

  componentDidMount(){
    this.canvas = document.getElementById("canvas");
    this.canvasBack = document.getElementById("canvasBack");
    this.resetButton = document.getElementById("reset");
    this.ctx = this.canvas.getContext("2d");
    this.ctxBack = this.canvasBack.getContext("2d");
    this.width = this.canvasBack.width - this.listWidth;
    this.height = this.canvasBack.height;
    this.words= this.props.puzzle.words;
    this.g = this.props.puzzle.grid;
    this.gwidth = this.width/this.g[0].length;
    this.gheight = this.height/this.g.length;
    this.cmid = this.gwidth/2;
    this.cheight = this.gheight/2;
    this.Word();
    this.Letter();
    this.canvas.addEventListener("mousedown",this.mouseDown,false);
    this.canvas.addEventListener("mouseup",this.mouseUp,false);
    this.ctx.globalCompositeOperation = "xor";
    this.ctxBack.globalCompositeOperation = "xor";
    this.resetButton.addEventListener("click",this.Reset,false);
    this.loadSolved();
    }


    Word(){
    	this.ctxBack.fillStyle = 'black';
    	for(let i = 0;i<this.words.length;i++){

    		this.ctxBack.font = "20px Arial";
        this.ctxBack.textAlign = "start";
        this.ctxBack.textBaseline = "middle";
        this.ctxBack.fillText(this.words[i],this.width+this.off,i*this.yspace*this.o+this.cheight);


    	}
    }

    loadSolved(){
      let st = localStorage.getItem("categories");
      if(st != null){
        let cate = JSON.parse(localStorage.getItem("categories"));
        let save = cate[this.props.cateIndex].categoryPuzzles[this.props.index].solved

        for(let i =0;i <save.length;i++){
          this.Strike(save[i].index);
          this.drawBack(save[i].x1,save[i].y1,save[i].x2,save[i].y2)

      }

  }

    }
    Strike(i=0){
    	this.ctxBack.strokeStyle = "rgba(0,0,0,0.5)";
      this.ctxBack.lineWidth = 1;
    	let w = this.ctxBack.measureText(this.words[i]).width;
    	this.ctxBack.beginPath();
    	this.ctxBack.moveTo(this.width+this.off,i*this.yspace*this.o+this.cheight);
    	this.ctxBack.lineTo(this.width+this.off+w,i*this.yspace*this.o+this.cheight);
    	this.ctxBack.stroke();
    }

  Letter(){
    this.ctxBack.fillStyle = 'black';
    this.ctxBack.font = "20px Arial";
    this.ctxBack.textAlign = "center";
    this.ctxBack.textBaseline = "middle";
    this.ctxBack.lineWidth = 1;
	   for(let i =0;i<this.g.length;i++){
		     let p = this.cheight + this.gheight* i;
		       for(let j=0;j<this.g[0].length;j++){
			          let t = this.cmid + this.gwidth*j;
			          this.ctxBack.fillText(this.g[i][j],t,p);
		}
	}
    this.ctxBack.strokeStyle = 'black';
    this.ctxBack.beginPath();
    this.ctxBack.strokeRect(0,0,this.canvasBack.width,this.canvasBack.height);
}

  Reset(){
    let st = localStorage.getItem("categories");
    if(st != null){
      let cate = JSON.parse(localStorage.getItem("categories"));
      cate[this.props.cateIndex].categoryPuzzles[this.props.index].solved = [];
      localStorage.setItem("categories",JSON.stringify(cate));

}
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.width);
    this.ctxBack.clearRect(0,0,this.canvasBack.width,this.canvasBack.width);
    this.Word();
    this.Letter();


}


  draw(){
    this.ctx.strokeStyle = "rgba(255,0,0,.5)";
    this.ctx.fillStyle = "rgba(255,0,0,.5)";;
    this.ctx.lineWidth = 15;

    let x1 = this.cmid + this.x1Index * this.gwidth;
    let y1 = this.cheight + this.y1Index * this.gheight;
    let x2 = this.x2Loc;
    let y2 = this.y2Loc;


    this.ctx.beginPath()
    this.ctx.arc(x1,y1,7.5,0,2*Math.PI,false)
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(x1,y1);
    this.ctx.lineTo(x2,y2);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(x2,y2,7.5,0,2*Math.PI,false)
    this.ctx.fill();



}


  drawBack(h,k,l,m){
    this.ctxBack.strokeStyle = "rgba(0,255,0,.3)";
    this.ctxBack.fillStyle = "rgba(0,255,0,.3)";
    this.ctxBack.lineWidth = 15;

    let x1 = this.cmid + h * this.gwidth;
    let y1 = this.cheight + k * this.gheight;
    let x2 = this.cmid + l * this.gwidth;
    let y2 = this.cheight + m * this.gheight;
    this.ctxBack.beginPath()
    this.ctxBack.arc(x1,y1,7.5,0,2*Math.PI,false)
    this.ctxBack.fill();
    this.ctxBack.beginPath();
    this.ctxBack.moveTo(x1,y1);
    this.ctxBack.lineTo(x2,y2);
    this.ctxBack.stroke();
    this.ctxBack.beginPath();
    this.ctxBack.arc(x2,y2,7.5,0,2*Math.PI,false)
    this.ctxBack.fill();

}
// sets x and y index of closest letter from mouse location
mouseDown(event){

	let x = event.pageX - this.canvas.offsetLeft;
	let y = event.pageY -this.canvas.offsetTop;

	if(x <= this.width){

     this.canvas.addEventListener("mousemove",this.mouseMove,false);

	   let xSpot = Math.floor(x/this.gwidth);
	   let ySpot = Math.floor(y/this.gheight);

	   this.x1Index = xSpot;
	   this.y1Index = ySpot;

	   this.x2Loc = x;
	   this.y2Loc = y;
	   this.draw();
	}
}


mouseMove(event){
	this.ctx.clearRect(0,0,this.canvas.width,this.canvas.width);
	let x = event.pageX - this.canvas.offsetLeft;
	let y = event.pageY -this.canvas.offsetTop;

	this.x2Loc = x;
	this.y2Loc = y;
	this.draw();

}

mouseUp(event){
	this.ctx.clearRect(0,0,this.canvas.width,this.canvas.width);
  this.canvas.removeEventListener("mousemove",this.mouseMove);

  let x = event.pageX - this.canvas.offsetLeft;
  let y = event.pageY -this.canvas.offsetTop;

  if(x <= this.width){
    let xSpot = Math.floor(x/this.gwidth);
    let ySpot = Math.floor(y/this.gheight);
    // if mousedown and mouseup locations are horizontal,vertical or diagonal run check
    if(Math.abs(xSpot - this.x1Index) == Math.abs(ySpot-this.y1Index) || xSpot == this.x1Index || ySpot == this.y1Index){

      this.check(this.x1Index,xSpot,this.y1Index,ySpot)
}

}
}
// combines selected letters forward and reverse then checks to see if word matches puzzle
check(x1,x2,y1,y2){
	var letterArray = [];
  // vertical selection
	if(x1 == x2 && y1 != y2){
		let i;
		let t;
		if(y1 < y2){
			 i = y1;
			 t = y2;
		}else{
			 i = y2;
			t = y1;
	}

		for(i;i<=t;i++){
			 letterArray.push(this.g[i][x1])

		}
  // horizontal selection
	}else if(y1 == y2 && x1 != x2){
		let i;
		let t;
		if(x1 < x2){
			 i = x1;
			 t = x2;
		}else{
			 i = x2;
		   t = x1;

	}

		for(i;i<=t;i++){

			letterArray.push(this.g[y1][i])

		}

	}else{
		
    // must be diagonal
    // top-left - bottom-right
		if(x1 < x2 && y1 < y2){
			let i = x1
			let t = x2
			let j = y1

		for(i,j;i<=t;i++,j++){

			letterArray.push(this.g[j][i])

		}
   // bottom-left - top-right
	}else if(x1 < x2 && y1 >y2){
		let i = x1
		let t = x2
		let j = y1

		  for(i,j;i<=t;i++,j--){

			   letterArray.push(this.g[j][i])

		}
    // top-right - bottom-left
	}else if(x1 > x2 && y1 < y2){
		let i = x2
		let t = x1
		let j = y2


	   for(i,j;i<=t;i++,j--){

		     letterArray.push(this.g[j][i])

		}
    // bottom-left - top-right
	}else{
		let i = x2
		let t = x1
		let j = y2

		for(i,j;i<=t;i++,j++){

		    letterArray.push(this.g[j][i])

		}

	}
}
let word = letterArray.join("");

let wordReverse = letterArray.reverse().join("");


for(let k = 0;k<this.words.length;k++){


	if(word == this.words[k].replace(/\s/g,'').toUpperCase() || wordReverse == this.words[k].replace(/\s/g,'').toUpperCase() ){
		this.Strike(k);


		this.drawBack(x1,y1,x2,y2);
    let r = new SaveWord(this.words[k],k,x1,x2,y1,y2)
    let st = localStorage.getItem("categories");
    if(st != null){
      let cate = JSON.parse(localStorage.getItem("categories"));
      cate[this.props.cateIndex].categoryPuzzles[this.props.index].solved.push(r)
	    localStorage.setItem("categories",JSON.stringify(cate));

}

	}

}
}
closeOverLay(){

  this.props.handleClose();

}

  render() {
    return (
      <div className="Word">

          <button onClick={this.closeOverLay.bind(this)}>Close</button>
          <button id="reset">Reset</button>
          <div className="puzzle-name">{this.props.puzzle.puzzleName}</div>
          <div className="canvas-wrap">
          <div className="canvas-pat">
          <canvas id="canvasBack" width='700' height='700'></canvas>
          <canvas id="canvas" width='700' height='700'></canvas>
          </div>
          </div>
      </div>
    );
  }
}

export default Word;
