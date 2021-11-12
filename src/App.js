import * as React from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import TodosContextProvider from "./contexts/TodoContext";

const App = () => {
  return (
    <div className="root">
      <TodosContextProvider>
        <TodoList />
        <TodoForm />
      </TodosContextProvider>
    </div>
  );
};

export default App;
