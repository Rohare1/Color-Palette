import sizes from './sizes';

export  default {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh'
  },
  slider: {
    width: '350px',
    margin: '0 10px',
    display: 'flex',
    borderLeft: '15px',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& span': {
      marginRight: '15px'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover':{
      backgroundColor: 'green', 
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none', 
      height: '13px', 
      width: '13px', 
      marginTop: '-3px'
    },
    [sizes.down('md')]:{
      width: '150px'
    },
  },  
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black'
    },
    [sizes.down('xs')]:{
      display: 'none'
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem'
   }
}