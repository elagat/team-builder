import React, { useState } from "react";
import Form from './Form.js';
import MemberList from "./MemberList";

import './App.css';

function App() {

  return (
    <div className="App">
      <Form />
      <MemberList />
    </div>
  );
}

export default App;
