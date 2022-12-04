import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.1rem;
`;

const Text = styled.span`
  color: #f55139;
`;

function Logo() {
  return (
    <LogoContainer>
      <Text>KUPANG</Text>
    </LogoContainer>
  );
}

export default Logo;
