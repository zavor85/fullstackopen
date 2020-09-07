import React from "react";
import Contacts from "./Contacts";

const ContactsList = ({ list, remove }) => {
  const filterList = list.map(item => (
    <Contacts 
    key={item.id} 
    name={item.name} 
    number={item.number}  
    list={list}  
    remove={() => remove(item)}
    />
  ));
  return (
    <div>
      <ul>{filterList}</ul>
    </div>
  );
};

export default ContactsList;