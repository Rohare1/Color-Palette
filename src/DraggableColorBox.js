import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {SortableElement} from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles.js'

const DraggableColorBox = SortableElement(props => {
  const {classes, name, handleClick, color} = props;
  return (
    <div 
      className={classes.root} 
      style={{background: color}}
    >
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon 
          className={classes.deleteIcon} 
          onClick={handleClick}
        />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);