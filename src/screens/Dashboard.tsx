import React from "react";
import styled from "styled-components";
import {
  faCircleDown,
  faCircleUp,
  faCirclePlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../components/Loader";

interface IStateBoard {
  width?: string;
}

const Containter = styled.main`
  background-color: #f1f2f4;
  padding: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px;
  flex-grow: 1;
`;

const Title = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  display: block;
  width: 100%;
  padding: 20px;
`;

const DashRow = styled.section`
  background-color: white;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.1rem;
  }
  min-width: 591px;
  min-height: 60px;
`;

const DashCol = styled.section`
  background-color: white;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 591px;
  min-height: 352px;
`;

const StateBoard = styled.div<IStateBoard>`
  width: ${(prop) => (prop.width ? prop.width : "33%")};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const Split = styled.span`
  color: #f1f2f4;
`;

function Dashboard() {
  return (
    <Containter>
      <DashRow>
        <StateBoard>
          <span>오늘 물류 현황</span>
        </StateBoard>
        <Split>|</Split>
        <StateBoard>
          <FontAwesomeIcon icon={faCircleDown} />
          <span>입고 {0}개</span>
        </StateBoard>
        <Split>|</Split>
        <StateBoard>
          <FontAwesomeIcon icon={faCircleUp} />
          <span>출고 {0}개</span>
        </StateBoard>
      </DashRow>
      <DashRow>
        <StateBoard width="50%">
          <FontAwesomeIcon icon={faCirclePlus} />
          <span>신규주문 {0}개</span>
        </StateBoard>
        <Split>|</Split>
        <StateBoard width="50%">
          <FontAwesomeIcon icon={faCircleXmark} />
          <span>취소요청 {0}개</span>
        </StateBoard>
      </DashRow>
      <DashCol>
        <Title>입고 현황</Title>
      </DashCol>
      <DashCol>
        <Title>출고 현황</Title>
      </DashCol>
      <DashCol>
        <Title>취소 현황</Title>
      </DashCol>
      <DashCol>
        <Title>판매량 많은 상품</Title>
      </DashCol>
    </Containter>
  );
}

export default Dashboard;
