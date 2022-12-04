import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../api";

const Container = styled.div`
  display: flex;
  svg {
    color: #dededf;
    margin-right: 10px;
  }
  align-items: center;
  border-bottom: 2px solid #f1f2f4;
  width: 100%;
  padding: 5px 20px;
  cursor: pointer;
`;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  span:first-child {
    display: blcok;
    margin-bottom: 10px;
  }
  span:last-child {
    display: blcok;
    font-size: 0.9rem;
    color: #4e5968;
  }
`;

function Item({ productId, productName, imgUrl }: IProduct) {
  return (
    <Container>
      {imgUrl ? (
        <img alt={`${productId}`} src={imgUrl} height="42px" width="42px"></img>
      ) : (
        <FontAwesomeIcon icon={faBoxesPacking} size="2x" />
      )}
      <Label>
        <span>{productName}</span>
        <span>{productId}</span>
      </Label>
    </Container>
  );
}

export default Item;
