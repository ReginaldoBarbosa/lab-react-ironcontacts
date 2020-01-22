import React from "react";

function genereteFiveContacts(arr) {
  let table = []
  for (let i = 0; i < 5; i += 1) {
    let column = []
      column.push(<td><img src={arr[i].pictureUrl} alt={arr[i].name} width="100" height="150"/></td>);
      column.push(<td><h2 style={{ color: "green" }}>{arr[i].name}</h2></td>);
      column.push(<td>{arr[i].popularity.toFixed(2)}</td>);
      column.push(<td>{/* <button onClick={() => clickHandler(teste.itemValue)}> */}BUTTON{/* </button> */}</td>);
    table.push(<tr>{column}</tr>)
  }
  return table;
};

const randomContact = [];

function genereteRandomContact(arr) {
  console.log("RAPAAAAZZZ");
    let table = [];
    let randomNumber = Math.floor(Math.random() * (arr.length + 1));
      let column = []
        column.push(<td><img src={arr[randomNumber].pictureUrl} alt={arr[randomNumber].name} width="100" height="150"/></td>);
        column.push(<td><h2 style={{ color: "green" }}>{arr[randomNumber].name}</h2></td>);
        column.push(<td>{arr[randomNumber].popularity.toFixed(2)}</td>);
        column.push(<td>{/* <button onClick={() => clickHandler(teste.itemValue)}> */}BUTTON{/* </button> */}</td>);
      table.push(<tr>{column}</tr>)
    return table
    
  }

const ContactList = ({ allContacts }) => {
  
  return (
    <div>
    <button onClick={randomContact.push(genereteRandomContact(allContacts))}>ADD A RANDOM CONTACT</button>
      <table>
        <tr>
          <th>
            <h2>Picture</h2>
          </th>
          <th>
            <h2>Name</h2>
          </th>
          <th>
            <h2>Popularity</h2>
          </th>
          <th>
            <h2>Action</h2>
          </th>
        </tr>
        {genereteFiveContacts(allContacts)}
        {randomContact}
      </table>
    </div>
  );
};

export default ContactList;
