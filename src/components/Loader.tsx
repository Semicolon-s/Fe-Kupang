import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const FullContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loader() {
  return (
    <FullContainer>
      <FontAwesomeIcon
        icon={faSpinner}
        spin
        style={{ color: "#f55139", opacity: 0.8, zIndex: 100 }}
        size="3x"
      />
    </FullContainer>
  );
}

export default Loader;
