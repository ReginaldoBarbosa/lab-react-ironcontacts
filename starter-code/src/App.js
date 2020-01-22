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
  genereteFiveContacts = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 5; i += 1) {
      let column = []
        column.push(<td><img src={this.state.contacts[i].pictureUrl} alt={this.state.contacts[i].name} width="100" height="150"/></td>);
        column.push(<td><h2 style={{ color: "green" }}>{this.state.contacts[i].name}</h2></td>);
        column.push(<td>{this.state.contacts[i].popularity.toFixed(2)}</td>);
        column.push(<td>{/* <button onClick={() => clickHandler(teste.itemValue)}> */}BUTTON{/* </button> */}</td>);
      table.push(<tr>{column}</tr>)
    }
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
            contactName={this.state.contacts[1].id}
            >
          </ContactList>
            {this.genereteFiveContacts()}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
