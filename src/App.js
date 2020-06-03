import React from 'react';
import './App.css';
import Form from './Components/Form';
import SingleElement from './Components/SingleElement';



class App extends React.Component {
  
  state = {
    singleElementStyle:'1',
    style : {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    todoList: []
  }

  addTodo = (e, title) => {
    e.preventDefault();
    if (title.trim() !== "") {
      this.setState({
        todoList: [
          ...this.state.todoList,
          {
            title: title.trim(),
          },
        ],
      });
    }
  }

  deleteTodoHandler = (title) => {
    this.setState({
      todoList: this.state.todoList.filter((single)=>{
        return single.title !== title
      })
    })
  }

  changeVis = () => {

    if (this.state.singleElementStyle === '1' ) {

      this.setState({
        ...this.state,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          flexDirection: 'row'
        },
        singleElementStyle: '2'
      })

    }
    else {
      this.setState({
        ...this.state,
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        singleElementStyle: '1'
      })
    }


  }


  render() {
    return (
      <div className="contenitore">

        <button className='button_visualization' onClick={this.changeVis} >change vis.</button>

        <Form onSubmitHandler={this.addTodo} />

          <div className='container_todos' style={this.state.style} >

          {
            this.state.todoList.reverse().map((single, index)=>{
              return <SingleElement display={this.state.singleElementStyle} key={index} title={single.title} deleteTodo={() => this.deleteTodoHandler(single.title)} />
            })
          }

          </div>

      </div>
    );
  }
}



export default App;
