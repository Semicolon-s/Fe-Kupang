import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { getProductList, getStock, IProductList, IStockList } from "../api";
import Item from "../components/Item";
import LabelBar from "../components/LabelBar";
import Loader from "../components/Loader";

// 재고 관리

const Containter = styled.main`
  background-color: #f1f2f4;
  padding: 30px;
  flex-grow: 1;
  min-height: 805px;
  overflow-y: scroll;
`;

const Board = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  min-width: 600px;
`;

const Section = styled.section`
  background-color: white;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  height: 100%;
  ${Board}:first-child {
    border-right: 1px solid #f1f2f4;
  }
  ${Board}:last-child {
    border-left: 1px solid #f1f2f4;
  }
  min-width: 1200px;
`;

const Info = styled.ul`
  width: 100%;
  li {
    width: 100%;
    display: block;
  }
`;

const Title = styled.header`
  font-size: 1.4rem;
  font-weight: 700;
  display: block;
  width: 100%;
  padding: 25px;
`;

function Management() {
  const labelArray = [
    {
      labelName: "전체",
      width: "150px",
    },
    {
      labelName: "상품목록",
      width: "450px",
    },
  ];

  const { isLoading, data: stockList } = useQuery<IStockList>({
    queryKey: ["stockList"],
    queryFn: () => getStock(),
  });

  console.log(stockList);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Containter>
          <Section>
            <Board>
              <Title>재고 관리</Title>
              <LabelBar labelArray={labelArray} />
              <Info>
                {stockList?.data.map((stock) => (
                  <li key={stock.stockId}>{/* <Item {...stock} /> */}</li>
                ))}
              </Info>
            </Board>
            <Board>
              <Title>상품 정보</Title>
              <Info></Info>
            </Board>
          </Section>
        </Containter>
      )}
    </>
  );
}

export default Management;
