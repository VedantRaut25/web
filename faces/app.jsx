import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>; // Props Example
}

function FormExample() {
  const [text, setText] = useState(""); // State Example
  const inputRef = useRef(); // Refs Example

  const handleSubmit = (e) => { // Event Example
    e.preventDefault();
    alert("Submitted: " + text);
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function ListExample() {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> // Keys Example
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/form">Form</Link> | <Link to="/list">List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Greeting name="Avi" />} />
        <Route path="/form" element={<FormExample />} />
        <Route path="/list" element={<ListExample />} />
      </Routes>
    </Router>
  );
}