import React from "react";
import styled from "styled-components";
import Item from "../components/Item";
import LabelBar from "../components/LabelBar";

const Containter = styled.main`
  background-color: #f1f2f4;
  padding: 30px;
  flex-grow: 1;
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
  return (
    <Containter>
      <Section>
        <Board>
          <Title>상품 관리</Title>
          <LabelBar labelArray={labelArray} />
        </Board>
        <Board>
          <Title>상품 정보</Title>
        </Board>
      </Section>
    </Containter>
  );
}

export default Register;
