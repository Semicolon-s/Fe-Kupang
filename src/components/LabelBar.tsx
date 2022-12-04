import React from "react";
import styled from "styled-components";

interface ILabel {
  width: string;
}

interface ILabelData {
  labelName: string;
  width: string;
}

interface ILabelBar {
  labelArray: ILabelData[];
}

const Bar = styled.div`
  display: flex;
  width: 100%;
  background-color: #f1f2f4;
  height: 30px;
`;

const Label = styled.div<ILabel>`
  color: #4e5968;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(prop) => prop.width};
  font-size: 0.9rem;
`;

function LabelBar({ labelArray }: ILabelBar) {
  return (
    <Bar>
      {labelArray.map((label) => (
        <Label key={label.labelName} width={label.width}>
          {label.labelName}
        </Label>
      ))}
    </Bar>
  );
}

export default LabelBar;
