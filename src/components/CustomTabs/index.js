import React, { useState , useEffect, useRef, useContext } from 'react';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Home from '../Home';
import './index.css';
import { CssBaseline } from '@mui/material';
import { ChildContext } from '../../lib/ChildContext';
import {
  loadStorageObjs,
  loadStorageObject,
  saveStorageObject,
} from '../../lib/helpers';

export default function CustomTabs() {
  const { child, addChild, setActiveChild, removeChild, editChild} = useContext(ChildContext);
  const [tabs, setTabs] = React.useState([{
    title: 'Child'
}]);

const storageObjs = {
  value: '',
  aliases: [],
};

  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const setActiveTab = (index) => {
    setActiveTabIndex(index);
    setActiveChild(index);
  };

  const addTab = () => {
    const newTab = {
      title: 'Child'
    };
    setTabs([...tabs, newTab]);
    setActiveTabIndex(tabs.length); // Use the functional form to ensure the updated value is correct
    addChild();
    setActiveChild(tabs.length);
  };

  const removeTab = (index) => {
    const updatedTabs = tabs.filter((tab, i) => i !== index);
    setTabs(updatedTabs);
    setActiveTabIndex(updatedTabs.length ? 0 : null); // Use null instead of 0 when no tabs are left
    removeChild(index);
    setActiveChild(updatedTabs.length ? 0 : null);

  };

  
  const tabTitle = (index) => {

    console.log(child);
    return child[index].firstName;
  };

  return (

      <React.Fragment>
        <ul className="tab-header">
          {tabs.map((tab, index) => (
            <li
              key={index} // Use a unique key for each list item
              className={activeTabIndex === index ? 'active-tab' : ''}
              onClick={() => setActiveTab(index)}
            >
              {tabTitle(index)}
            </li>
          ))}
          <span style={{marginLeft: '2rem'}} className="add-remove-icons">
            <Button
              onClick={addTab}
              sx={{
                backgroundColor: '#ECEDFB',
                color: '#0E103D',
                margin: '1rem',
                ':hover': { backgroundColor: '#121550', color: '#FFFFFF' }
              }}
              size="small"

              variant="contained"
              startIcon={<AddIcon />}
            >
              Add Child
            </Button>

            {activeTabIndex !== null && (
              <Button
                onClick={() => removeTab(activeTabIndex)}
                sx={{
                  backgroundColor: '#ECEDFB',
                  color: '#d11a2a',
                  margin: '1rem',
                  ':hover': { backgroundColor: '#df2235', color: '#FFFFFF' } }}
                size="small"

                variant="contained"
                startIcon={<DeleteForeverIcon />}
              >
                Remove Child
              </Button>

            )}
          </span>
        </ul>
        {/* <div className="tab-body"> */}
          {tabs.map((tab, index) => (
            // <div>
            //   <Home />
            // </div>

            <div
              className="tab"
              key={index}
              style={{ display: activeTabIndex === index ? 'block' : 'none' }}
            >

              <Home />


            </div>
          ))}
        </React.Fragment>

  );
}
