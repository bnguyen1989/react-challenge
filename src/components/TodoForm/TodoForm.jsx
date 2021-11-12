import * as React from "react";
import { Button, Input } from "@mui/material";

import styled from "styled-components";
import { useTodos } from "../../contexts/TodoContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledInput = styled(Input)`
  padding: 10px 15px;
  border-radius: 4px;
  margin-right: 5px;
  width: 250px;
`;

export const TodoForm = () => {
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    console.log("Add an ability to add new task");
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) handleAddTodo();
  };

  return (
    <Wrapper>
      <StyledInput
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add task
      </Button>
    </Wrapper>
  );
};
