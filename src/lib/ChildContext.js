// Create context for the user in order to handle authentication and account information
import React, { useState, createContext, useEffect } from 'react';


export const ChildContext = createContext([{ firstName: 'Child' }]);

export const ChildProvider = ({ children }) => {
  const [child, setChild] = useState([{ firstName: 'Child' }]);

// const selectChild = (val) => {
//   console.log('childcontext:' + val);
//   setChild([...child, {
//     firstName: val
//   }]);
// }

const [activeChildIndex, setActiveChildIndex] = React.useState(0);

const addChild = () => {
  const newChild = {
    firstName: 'Child'
  };
  setChild([...child, newChild]);
  // setActiveChildIndex(child.length);
};

const setActiveChild = (index) => {
  setActiveChildIndex(index);
};

const removeChild = (index) => {
  const updatedChildren = child.filter((val, i) => i !== index);
  setChild(updatedChildren);
  // setActiveChildIndex(updatedChildren.length ? 0 : null);
};

const editChild = (index, name) => {
  if (name !== undefined) {
  child[index].firstName = name;
  } else {
    child[index].firstName = 'Child';
  }
}

return (
  <ChildContext.Provider value={{ child, activeChildIndex, addChild , setActiveChild, removeChild, editChild}}>
    {children}
  </ChildContext.Provider>
);
};