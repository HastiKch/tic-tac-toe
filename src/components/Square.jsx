import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import player1img  from './x.svg';
import player2img  from './o.svg';
import React from 'react';
import './index.css';

const MyButton1Hover = styled(Button)({

  background: '#FFE4E1',
  border: 2,
  borderRadius: 4,
  color: 'white',
  height: '13vw',
  width: '13vw',
  fontSize: '10vw',
  top: 0,
  left: 0,

  '&:hover':{
    background: '#CD5C5C',
    backgroundImage: 'url(' +player1img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '13vw',
    backgroundPosition: 'center'
  },

});

const MyButton2Hover = styled(Button)({

  background: '#FFE4E1',
  border: 0,
  borderRadius: 4,
  color: 'white',
  height: '13vw',
  width: '13vw',
  fontSize: '10vw',
  top: 0,
  left: 0,
  cursor: 'pointer',

  '&:hover':{
    background: '#87CEFA',
    backgroundImage: 'url(' + player2img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '13vw',
    backgroundPosition: 'center'
  }

});

const MyButton1 = styled(Button)({

  background: '#B22222',
  border: 0,
  borderRadius: 4,
  color: '#00000000',
  height: '13vw',
  width: '13vw',
  fontSize: '10vw',
  top: 0,
  left: 0,
  backgroundImage: 'url(' + player1img + ')',
  backgroundRepeat:'no-repeat',
  backgroundSize: '10vw',
  backgroundPosition: 'center',
  WebkitTransition: '0.25s ease',
  transition: '0.25s ease',

  '&:hover':{
    background:'#B22222',
    backgroundImage: 'url(' + player1img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '13vw',
    backgroundPosition: 'center'
  },

});

const MyButton2 = styled(Button)({

  background: '#1E90FF',
  border: 0,
  borderRadius: 4,
  color: '#1E90FF',
  height: '13vw',
  width: '13vw',
  fontSize: '10vw',
  top: 0,
  left: 0,
  backgroundImage: 'url(' + player2img + ')',
  backgroundRepeat:'no-repeat',
  backgroundSize: '10vw',
  backgroundPosition: 'center',
  WebkitTransition: '0.25s ease',
  transition: '0.25s ease',

  '&:hover':{
    background: '#1E90FF',
    backgroundImage: 'url(' + player2img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '13vw',
    backgroundPosition: 'center'
  }

});



const MyButton1HoverMobile = styled(Button)({

  background: '#FFE4E1',
  border: 0,
  borderRadius: 4,
  color: 'white',
  height: '24vw',
  width: '24vw',
  fontSize: '10vw',
  top: 0,
  left: 0,

  '&:hover':{
    background: '#CD5C5C',
    backgroundImage: 'url(' +  + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '16vw',
    backgroundPosition: 'center'
  },

});

const MyButton2HoverMobile = styled(Button)({

  background: '#FFE4E1',
  border: 0,
  borderRadius: 4,
  color: 'white',
  height: '24vw',
  width: '24vw',
  fontSize: '10vw',
  top: 0,
  left: 0,
  cursor: 'pointer',

  '&:hover':{
    background: '#87CEFA',
    backgroundImage: 'url(' + player2img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '16vw',
    backgroundPosition: 'center'
  }

});

const MyButton1Mobile = styled(Button)({

  background: '#B22222',
  border: 0,
  borderRadius: 4,
  color: '#00000000',
  height: '24vw',
  width: '24vw',
  fontSize: '10vw',
  top: 0,
  left: 0,
  backgroundImage: 'url(' + player1img + ')',
  backgroundRepeat:'no-repeat',
  backgroundSize: '16vw',
  backgroundPosition: 'center',
  WebkitTransition: '0.25s ease',
  transition: '0.25s ease',

  '&:hover':{
    background:'#B22222',
    backgroundImage: 'url(' +  + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '16vw',
    backgroundPosition: 'center'
  },

});

const MyButton2Mobile = styled(Button)({

  background: '#1E90FF',
  border: 0,
  borderRadius: 4,
  color: '#00000000',
  height: '24vw',
  width: '24vw',
  fontSize: '20vw',
  top: 0,
  left: 0,
  backgroundImage: 'url(' + player2img + ')',
  backgroundRepeat:'no-repeat',
  backgroundSize: '16vw',
  backgroundPosition: 'center',
  WebkitTransition: '0.25s ease',
  transition: '0.25s ease',

  '&:hover':{
    background: '#1E90FF',
    backgroundImage: 'url(' + player2img + ')',
    backgroundRepeat:'no-repeat',
    backgroundSize: '16vw',
    backgroundPosition: 'center'
  }

});


function hoverTurn(xIsNext , props , matches){

  if(!matches){
    if(props.className === 'button player1')
      return(
      <MyButton1 className={props.className} onClick={props.onClick}>
        {props.value}
      </MyButton1>)

    else if(props.className === 'button player2')
      return(
      <MyButton2 className={props.className} onClick={props.onClick}>
        {props.value}
      </MyButton2>)  

    else if(xIsNext && !props.value)
      return(
      <MyButton1Hover className={props.className} onClick={props.onClick}>
        {props.value}
      </MyButton1Hover>)

    else if(!xIsNext && !props.value)
      return(
      <MyButton2Hover className={props.className} onClick={props.onClick}>
          {props.value}
      </MyButton2Hover>)
  }else{
      if(props.className === 'button player1')
      return(
      <MyButton1Mobile className={props.className} onClick={props.onClick}>
        {props.value}
      </MyButton1Mobile>)

    else if(props.className === 'button player2')
      return(
      <MyButton2Mobile className={props.className} onClick={props.onClick}>
        {props.value}
      </MyButton2Mobile>)  

    else if(xIsNext && !props.value)
      return(
      <MyButton1HoverMobile className={props.className} onClick={props.onClick}>
        {props.value}
      </MyButton1HoverMobile>)

    else if(!xIsNext && !props.value)
      return(
      <MyButton2HoverMobile className={props.className} onClick={props.onClick}>
          {props.value}
      </MyButton2HoverMobile>)
   }
}

function Square(props) {
  
const matches = useMediaQuery('(max-width:900px)');

    return (
        hoverTurn(props.xIsNext , props , matches)
      );
}

export default Square;