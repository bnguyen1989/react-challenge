import * as React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import { Checkbox } from "../CheckBox";
import { useTodos } from "../../contexts/TodoContext";

const Wrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  margin-bottom: 20px;
`;

const Title = styled(Typography)`
  text-transform: uppercase;
  border-bottom: 1px solid rgba(1, 1, 1, 0.1);
  padding: 5px 0;
  margin-bottom: 10px;
`;

const NoTodos = styled.div`
  text-align: center;
  padding: 5px 0;
  font-size: 14px;
  color: gray;
`;

export const TodoList = () => {
  const { todos, dispatch } = useTodos();

  const handleDelete = (id) => {
    console.log("Add an ability to delete task");
  };

  const toggleCheck = (id, checked) => {
    console.log("Add an ability to toggle task");
  };

  return (
    <Wrapper>
      <Title variant="h6" textAlign="center">
        Things to do:
      </Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todos.map((todoItem) => (
          <Checkbox
            label={todoItem.label}
            checked={todoItem.checked}
            onClick={() => toggleCheck(todoItem.id, todoItem.checked)}
            onDelete={() => handleDelete(todoItem.id)}
          />
        ))}
      </div>
    </Wrapper>
  );
};
