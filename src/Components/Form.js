import React, {useState} from 'react';

import './Form.css';

const Form = (props) => {

    const [todo, setTodo] = useState('');

    const inputChagedHandler = (event) => {
        console.log(event.target.value);
        setTodo(event.target.value);    
    }

    return (
      <form className="form" onSubmit={(e) => {
          props.onSubmitHandler(e, todo);
          setTodo('');
          }
        }>
        <input className="form_input" type="text" placeholder="Write todo" onChange={(e)=>inputChagedHandler(e)} value={todo} />
        <button className='form_button' type="submit">Insert</button>
      </form>
    );
}

export default Form;