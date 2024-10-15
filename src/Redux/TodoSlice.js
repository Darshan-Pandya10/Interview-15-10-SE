import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
      };
      state.todos.push(newTodo);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.title === action.payload.title
      );
      if (index !== -1) {
        state.todos[index] = {
          ...state.todos[index],
          description: action.payload.description,
          date: action.payload.date,
        };
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.title !== action.payload.title
      );
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
