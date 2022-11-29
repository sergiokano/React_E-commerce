import React, { createContext } from 'react';
import axios from 'axios'

const initialState = {
  tasks: [],
};


export const GlobalContext = createContext(initialState);