import React, {useState} from 'react';

import './SingleElement.css';

const SingleElement = (props) => {

    const [done, setDone] = useState(false);

    const [style, setStyle] = useState({
        style1: {
            width: '85vw',
        },
        style2: {
            width:'20vw'
        }
    })

    const [buttonStyle, setButtonStyle] = useState({
        buttonStyle1:{
            width: '50px',
            height: '50px',
            fontSize: '1.6em',
            textAlign:'center',
            margin: '10px',
            borderRadius: '10'
        },
        buttonStyle2:{
            width: '25px',
            height: '25px',
            fontSize: '0.7em',
            textAlign:'center',
            margin:'0',
            marginTop: '40px',
            marginRight: '5px',
            borderRadius: '0'
        }

    })

    const doneHandler = () => {
        setDone(!done);
    }

    const onClickHandler = () => {
        if (props.display==='2'){
            if (style.style2.width==='20vw') {
                setStyle({
                    style1: {
                        width: '85vw',
                    },
                    style2: {
                        width:'auto'
                    }
                })
            } 
            else {
                setStyle({
                    style1: {
                        width: '85vw',
                    },
                    style2: {
                        width:'20vw'
                    }
                })
            }

        }
    }

    return (
      <div className="single-element_container" onClick={onClickHandler} style={done ? {opacity : '0.4'} : {opacity : '1'} } style={props.display==='1' ? style.style1 : style.style2  } >
        <div className="single-element_info">
          <h1 style={done ? {textDecoration : 'line-through'} : {textDecoration : 'none'} }>{props.title}</h1>
        </div>
          <button style={props.display==='1' ? buttonStyle.buttonStyle1 : buttonStyle.buttonStyle2} className='single-element_button button_done' onClick={doneHandler} >✅</button>
          <button style={props.display==='1' ? buttonStyle.buttonStyle1 : buttonStyle.buttonStyle2} className='single-element_button button_delete' onClick={props.deleteTodo} >X</button>
      </div>
    );
}

export default SingleElement;