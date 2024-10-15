import React, { useState } from "react";

const Form = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && date) {
      onAddTodo({ title, description, date });
      setTitle("");
      setDescription("");
      setDate("");
    }
  };

  return (
    <form
      className="p-4 m-2 border-2 border-solid border-black flex flex-col w-fit justify-around"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        className="border-2 border-solid border-gray-300 p-2 m-2 "
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        className="border-2 border-solid border-gray-300 p-2 m-2 "
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={date}
        className="border-2 border-solid border-gray-300 p-2 m-2 "
        onChange={(e) => setDate(e.target.value)}
      />
      <button className="bg-blue-500 px-6 py-2 tracking-wider" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
