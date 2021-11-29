import React, { createContext, useReducer } from "react";
import { todosReducer } from "./TodoReducer";

export const TodosContext = createContext();

export const useTodos = () => React.useContext(TodosContext);

const todosTemplate = [
  {
    id: 0,
    label: "Fix and add an ability to display all tasks",
    checked: false,
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false,
  },
  {
    id: 2,
    label: "Add an ability to add a new task.",
    checked: false,
  },
  {
    id: 3,
    label: "Add an ability to toggle a task.",
    checked: false,
  },
  {
    id: 4,
    label: "Add an ability to delete a task.",
    checked: false,
  },
];

const TodosContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={{ todos }}>
      {props.children}
    </TodosContext.Provider>
  );
};
export default TodosContextProvider;
