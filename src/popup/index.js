import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserProvider } from '../lib/UserContext.js';
import Popup from './Popup';
import './index.css';

const container = document.getElementById('popup-container');
const root = createRoot(container);
root.render(
  <UserProvider>
    <Popup />
  </UserProvider>
);
