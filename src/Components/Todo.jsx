import React, { useState } from "react";

function Todo({ todo, handleDeleteTodo, handleUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editDate, setEditDate] = useState(todo.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTodo({
      title: editTitle,
      description: editDescription,
      date: editDate,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          className="p-4 m-4 border-2 border-solid border-black flex flex-col w-fit justify-around"
        >
          <input
            type="text"
            value={editTitle}
            className="border-2 border-solid border-gray-300 p-2 m-2 "
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <input
            type="text"
            value={editDescription}
            className="border-2 border-solid border-gray-300 p-2 m-2 "
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <input
            type="date"
            value={editDate}
            className="border-2 border-solid border-gray-300 p-2 m-2 "
            onChange={(e) => setEditDate(e.target.value)}
          />
          <button
            className="bg-blue-500 px-6 py-2 tracking-wider"
            type="submit"
          >
            Update Todo
          </button>
        </form>
      ) : (
        <div className="todo p-2 m-4 w-fit border-2 border-solid border-black flex flex-col justify-around">
          <h2 className="text-base font-semibold">{todo.title}</h2>
          <p className="text-base font-semibold">{todo.description}</p>
          <p className="text-base font-semibold">{todo.date}</p>
          <div className="buttons">
            <button
              className="bg-blue-500 w-fit px-6 py-2 m-4 tracking-wider"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 w-fit px-6 py-2 m-4 tracking-wider"
              onClick={() => handleDeleteTodo(todo.title)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
