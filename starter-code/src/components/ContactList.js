import React, { Component } from "react";

const ContactList = ({
  contactName,
  contactImage,
  contactPopularity,
  contactsFive,
}) => {
  console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", contactsFive);
  
  return (
    <div
    // {() => contactsFive()}
    >
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
        <tr>
        </tr>
      </table>
    </div>
  );
};

export default ContactList;
