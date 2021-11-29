import * as React from 'react';
import styled, { css } from "styled-components"
import { Checkbox as MuiCheckBox, FormGroup, FormControlLabel, Button } from "@mui/material"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  margin: 0 auto 5px;
`

const Label = styled.label`
`

export const Checkbox = ({
  onClick, checked, onDelete, label,
}) => (
  <Wrapper>
    <FormGroup>
      <FormControlLabel control={<MuiCheckBox checked={checked} onChange={onClick} />}
        label={<Label isChecked={checked}>{label}</Label>} />
    </FormGroup>
    <Button style={{ width: '10px' }} variant="text" onClick={onDelete}>x</Button>
  </Wrapper>
);
