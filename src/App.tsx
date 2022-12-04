import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Sidebar from "./components/Sidebar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    height: 100vh;
    font-family: -apple-system, sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    font-weight: 500;
    
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  #root{
    height:100vh;
  }
`;

const Contianer = styled.div`
  display: flex;
  height: 100%;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Contianer>
        <Sidebar />
        <Outlet />
        <GlobalStyle />
      </Contianer>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
