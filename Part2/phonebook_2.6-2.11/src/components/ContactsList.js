import React from "react";
import Contacts from "./Contacts";

const ContactsList = ({ list }) => {
  const filterList = list.map(item => (
    <Contacts key={item.name} name={item.name} number={item.number}         
    />
  ));
  return (
    <div>
      <ul>{filterList}</ul>
    </div>
  );
};

export default ContactsList;