import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

interface IItem {
  itemName: string;
  identifyingNumber: number;
}

const Container = styled.div`
  display: flex;
`;

function Item({ itemName, identifyingNumber }: IItem) {
  return (
    <Container>
      <FontAwesomeIcon icon={faBoxOpen} />
    </Container>
  );
}

export default Item;
