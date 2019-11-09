import React, {Component} from 'react';
import './App.scss';
import Form from "./components/Form";
import Payment from "./components/Payment";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Form />
       <Payment />
       </div>
      
    )
  }
}


export default App;
