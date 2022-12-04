import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import {
  faChartSimple,
  faBox,
  faCartArrowDown,
  faBoxesStacked,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

interface ICategory {
  current: boolean;
}

const Contianer = styled.div`
  padding: 20px 10px;
  min-width: 250px;
  div {
    margin-bottom: 20px;
    padding: 10px 20px;
  }
  height: 100%;
`;

const Nav = styled.nav`
  overflow-y: hidden;
`;

const Category = styled.li<ICategory>`
  border-radius: 10px;
  background-color: ${(prop) => (prop.current ? "#fef4f4" : "inherit")};

  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #f1f2f4;
  }
  a {
    display: block;
    font-size: 1.1rem;
    color: ${(prop) => (prop.current ? "#f55139" : "inherit")};
    padding: 15px 20px;
    svg {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <Contianer>
      <Logo />
      <Nav>
        <ul>
          <Category current={pathname === "/"}>
            <Link to={"/"}>
              <FontAwesomeIcon icon={faChartSimple} />
              대시보드
            </Link>
          </Category>
          <Category current={pathname === "/register-goods"}>
            <Link to={"/register-goods"}>
              <FontAwesomeIcon icon={faBox} />
              상품관리
            </Link>
          </Category>
          <Category current={pathname === "/product-order"}>
            <Link to={"/product-order"}>
              <FontAwesomeIcon icon={faCartArrowDown} />
              주문관리
            </Link>
          </Category>
          <Category current={pathname === "/stock-management"}>
            <Link to={"/stock-management"}>
              <FontAwesomeIcon icon={faBoxesStacked} />
              재고관리
            </Link>
          </Category>
          <Category current={pathname === "/warehouse-history"}>
            <Link to={"/warehouse-history"}>
              <FontAwesomeIcon icon={faClipboardList} />
              입/출고내역
            </Link>
          </Category>
        </ul>
      </Nav>
    </Contianer>
  );
}

export default Sidebar;
