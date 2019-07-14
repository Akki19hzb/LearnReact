import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja= (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas : ninjas

    });
    console.log(this.state.ninjas);
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    })
    this.setState(
      {
        ninjas : ninjas
      }
    )
    console.log(ninjas)
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja = {this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;