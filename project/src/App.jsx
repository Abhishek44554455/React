// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

import "./App.css";

function App() {
  return (
    <center class="Todo-Container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="todoItem">
        <TodoItem></TodoItem>
        <TodoItem2></TodoItem2>
        
      </div>
      
    </center>
  );
}

export default App;
