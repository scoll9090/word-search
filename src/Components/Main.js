import React, { Component } from 'react';
import Category from './Category';
import './temp.css';

class Main extends Component {
  render() {
    let categories  = this.props.categories.map((category,index,p)=>{

        return <Category cateIndex={index} category={category}></Category>


    })


    return (

      <div className="Main">
  
            {categories}
      </div>
    );
  }
}

export default Main;
