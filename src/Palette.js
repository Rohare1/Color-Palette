import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css';
import Slider from 'rc-slider';

class Palette extends Component{
  constructor(props){
    super(props);
    this.state = {level: 500};
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level){
    this.setState({level});
  }
  render(){
    const {colors} = this.props.palette;
    const {level} = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name}/>
    )); 
    return(
      <div className='Palette'>
      <div className='slider'>
        <Slider 
          defaultValue={level} 
          min={100} 
          max={900} 
          step={100}
          onAfterChange={this.changeLevel}
          trackStyle={{backgroundColor: 'transparent'}}
          railStyle={{height: 8}}
          handleStyle={{ 
            borderColor: 'green',
            height: 13, 
            width: 13, 
            marginLeft: -7,
            marginTop: -3,
            boxShadow: 'none', 
            backgroundColor: 'green', 
            border: '2px solid green'}}
        /> 
      </div> 
      {/* Navbar goes here */}
        <div className='Palette-colors'>
        {colorBoxes} 
        </div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;