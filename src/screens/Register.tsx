import React, { useState } from "react";
import styled from "styled-components";
import { getProductList, IProductList } from "../api";
import Item from "../components/Item";
import LabelBar from "../components/LabelBar";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { Link, Outlet } from "react-router-dom";

// 상품 관리

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
  width: 100%;
  ${Board}:first-child {
    border-right: 1px solid #f1f2f4;
  }
  ${Board}:last-child {
    border-left: 1px solid #f1f2f4;
  }
  min-width: 1200px;
`;

const Title = styled.header`
  font-size: 1.4rem;
  font-weight: 700;
  display: block;
  width: 100%;
  padding: 25px;
`;

const Info = styled.ul`
  width: 100%;
  li {
    width: 100%;
    display: block;
  }
`;

function Register() {
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

  const { isLoading, data: productList } = useQuery<IProductList>({
    queryKey: ["productList"],
    queryFn: () => getProductList(),
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Containter>
          <Section>
            <Board>
              <Title>상품 관리</Title>
              <LabelBar labelArray={labelArray} />
              <Info>
                {productList?.data.map((product) => (
                  <Link to={""} state={product} key={product.productId}>
                    <Item {...product} />
                  </Link>
                ))}
              </Info>
            </Board>
            <Board>
              <Title>상품 정보</Title>
              <Outlet />
            </Board>
          </Section>
        </Containter>
      )}
    </>
  );
}

export default Register;
