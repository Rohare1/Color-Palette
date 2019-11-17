import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ChromePicker} from 'react-color';
import { Button } from '@material-ui/core';
import styles from './styles/ColorPickerFormStyles'


class ColorPickerForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: ''
    }
    this.updateColor = this.updateColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => 
        this.props.colors.every(
          ({name}) => name.toLowerCase() !== value.toLowerCase()
        )
    );
    ValidatorForm.addValidationRule('isColorUnique', value => 
        this.props.colors.every(
          ({color}) =>  color !== this.state.currentColor
        )
    );
}

  updateColor(newColor){
    this.setState({currentColor: newColor.hex});
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(){
    const newColor = {
      color: this.state.currentColor, 
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({newColorName: ''});
  }
  render(){
    const {paletteIsFull, classes} = this.props;
    return(
        <div>
          <ChromePicker
            color={this.state.currentColor}
            onChangeComplete={this.updateColor}
            className={classes.picker}
          />
          <ValidatorForm onSubmit={this.handleSubmit} ref='form' instantValidate={false}>
            <TextValidator 
              value={this.state.newColorName}
              className={classes.colorNameInput}
              name='newColorName'
              variant='filled'
              margin='normal'
              placeholder= 'Color Name'
              onChange={this.handleChange}
              validators={[
                'required', 
                'isColorNameUnique', 
                'isColorUnique'
              ]}
              errorMessages={[
                'This field is required!', 
                'Color name must be unique!', 
                'Color already used!'
              ]}
            /> 
            <Button 
            type= 'submit'
            variant= 'contained'  
            color= 'primary' 
            disabled={paletteIsFull}
            className={classes.addColor}
            style= {{backgroundColor: paletteIsFull ? 'grey': this.state.currentColor}}
            >
              {paletteIsFull ? 'Palette Full': 'Add Color'}
          </Button>
          </ValidatorForm>
        </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);