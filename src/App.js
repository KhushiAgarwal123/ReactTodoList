import './App.css';
import Footer from './MyComponent/Footer';
import Header from './MyComponent/Header';
import Todos from './MyComponent/Todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponent/AddTodo';
import { About } from './MyComponent/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Contact } from './MyComponent/Contact';

function App() {
  let initTodo;

  const savedTodos = localStorage.getItem("todos");

  if (savedTodos === null || savedTodos === undefined) {
    initTodo = [];
  } else {
    try {
      initTodo = JSON.parse(savedTodos);
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      initTodo = [];
    }
  }

  const [todos, setTodos] = useState(
    //[
    //   {
    //     sno: 1,
    //     title: "Go to the market",
    //     desc: "You need to go to the market to get some groceries.",
    //   },
    //   {
    //     sno: 2,
    //     title: "Go to the mall",
    //     desc: "You need to go to the mall to buy some clothes.",
    //   },
    //   {
    //     sno: 3,
    //     title: "Go to the school",
    //     desc: "You need to go to school to pick up your child.",
    //   },
    //   {
    //     sno: 4,
    //     title: "Go to the park",
    //     desc: "You need to go to the park to enjoy swings.",
    //   },
    // ]
    initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  const onDelete = (todo) => {
    console.log("Before deletion:", todos);
    setTodos(todos.filter((e) => e.sno !== todo.sno));
    console.log("After deletion:", todos);
  };
  localStorage.setItem("todos", JSON.stringify(todos));

  //adding todos in the list
  const addTodo = (title, desc) => {
    console.log("I am adding this todo:", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };


    setTodos([...todos, myTodo]);

    console.log(myTodo);

    if (localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };



  return (
    <div>
      <Router>
        <Header title="My Todos List" searchBar={true} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Todos todo={todos} onDelete={onDelete} />
                <AddTodo addTodo={addTodo} />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </div>
  );
}
export default App;


