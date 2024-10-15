import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../Redux/TodoSlice";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleUpdateTodo = (updatedTodo) => {
    dispatch(updateTodo(updatedTodo));
  };

  const handleDeleteTodo = (title) => {
    dispatch(deleteTodo({ title }));
  };

  console.log(todos);

  return (
    <div>
      <Form onAddTodo={handleAddTodo} />

      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      ) : (
        <div className="flex items-center justify-center">
          <h1>Please Create Atleast One Todo</h1>
        </div>
      )}
    </div>
  );
};

export default TodoList;
