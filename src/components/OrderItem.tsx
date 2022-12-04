import React from "react";
import styled from "styled-components";
import { IOrder } from "../api";
import { ILabelData } from "./LabelBar";

interface ILabel {
  width: string;
}

interface IColoredLabel extends ILabel {
  color: string;
}

interface IOrderItem extends IOrder {
  labelArray: ILabelData[];
}

const Container = styled.div`
  display: flex;
  svg {
    color: #dededf;
    margin-right: 10px;
  }
  align-items: center;
  border-bottom: 2px solid #f1f2f4;
  width: 100%;
  padding: 10px 0px;
  cursor: pointer;
`;

const Label = styled.div<ILabel>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColoredLabel = styled.div<IColoredLabel>`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const Text = styled.span`
  color: #f55139;
`;

function OrderItem({
  labelArray,
  orderId,
  productId,
  productName,
  orderNum,
  buyer,
  phonenumber,
  address,
  orderState,
  orderDate,
}: IOrderItem) {
  const orderStates = ["신규주문", "주문확인"];
  const colors = ["#f55139", "#02855B"];
  const parsedDate = Date.parse(orderDate);
  const date = new Date(parsedDate);

  return (
    <Container>
      <ColoredLabel width={labelArray[0].width} color={colors[orderState]}>
        {orderStates[orderState]}
      </ColoredLabel>
      <Label width={labelArray[1].width}>{orderNum}</Label>
      <Label width={labelArray[2].width}>{productName}</Label>
      <Label width={labelArray[3].width}>{`${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${(
        "0" + date.getHours()
      ).slice(-2)} : ${("0" + date.getMinutes()).slice(-2)}`}</Label>
    </Container>
  );
}

export default OrderItem;
