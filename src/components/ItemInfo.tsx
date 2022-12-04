import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../api";
import Item from "./Item";

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
`;

const Card = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  border: 2px solid #f1f2f4;
  border-radius: 1.2rem;
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

function ItemInfo() {
  const location = useLocation();
  const product = location.state as IProduct;

  return (
    <>
      {product ? (
        <Container>
          <Card>
            {product.imgUrl ? (
              <img
                alt={`${product.productId}`}
                src={product.imgUrl}
                height="64px"
                width="64px"
              ></img>
            ) : (
              <FontAwesomeIcon icon={faBoxesPacking} size="2x" />
            )}
            <Label>
              <span>{product.productName}</span>
              <span>{product.productId}</span>
            </Label>
          </Card>
        </Container>
      ) : null}
    </>
  );
}

export default ItemInfo;
