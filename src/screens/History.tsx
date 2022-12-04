import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader";

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

function History() {
  return (
    <Containter>
      <Section>
        <Board>
          <Title>입/출고 내역</Title>
        </Board>
        <Board>
          <Title>상세 내역</Title>
        </Board>
      </Section>
    </Containter>
  );
}

export default History;
