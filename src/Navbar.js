import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component{
  render(){
    const {level, changeLevel} = this.props;
    return(
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>reactcolorpicker </a>
        </div>
        <div className='slider-container'>
          <div className='slider'>
            <span>Level:{level}</span>
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              step={100}
              onAfterChange={changeLevel}
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
                border: '2px solid green',
              }}
            />  
          </div> 
        </div>
      </header>
    );
  }
}

export default Navbar;