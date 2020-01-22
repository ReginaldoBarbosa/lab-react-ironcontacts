import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactList from "./components/ContactList";

// console.log(contacts[0]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts
    };
  }
  genereteRandomContacts(){
    console.log("RAPAAAAZZZ");
    let table = [];
    let randomNumber = Math.floor(Math.random() * (this.state.contacts.length + 1));
      let column = []
        column.push(<td><img src={this.state.contacts[randomNumber].pictureUrl} alt={this.state.contacts[randomNumber].name} width="100" height="150"/></td>);
        column.push(<td><h2 style={{ color: "green" }}>{this.state.contacts[randomNumber].name}</h2></td>);
        column.push(<td>{this.state.contacts[randomNumber].popularity.toFixed(2)}</td>);
        column.push(<td>{/* <button onClick={() => clickHandler(teste.itemValue)}> */}BUTTON{/* </button> */}</td>);
      table.push(<tr>{column}</tr>)
    return table
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div>
          <ContactList
            allContacts={this.state.contacts}
            genereteRandomContacts={this.state.contacts}
            >
          </ContactList>
            {/* {this.genereteFiveContacts()} */}
        </div>
      </div>
    );
  }
}

export default App;
