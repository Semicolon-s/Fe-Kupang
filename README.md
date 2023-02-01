# Kupang, Frontend
쿠팡 반품 센터에서 QA로 야간 알바를 한 적이 있었는데, 그 때 썼던 반품 처리 웹페이지와 같은 사이트를 만들어보고 싶었습니다.
UI는 instagram, pinterest에서 여러 대시 보드 UI/UX 디자인, 그리고 네이버 fasto에서 영감을 받았습니다. 

## 🖥️ 프로젝트 소개
<img
  width="480"
  src="https://user-images.githubusercontent.com/68225058/214662444-af804b1b-caf7-489f-8fd9-57b4b3874f9f.gif"
/>


셀프 물류 재고 관리 플랫폼 ***Kupang***은 재고 관리를 돕는 대시 보드 형태의 웹 사이트입니다. <br>
4명의 팀원에서 협업해서 개발을 진행하였습니다. <br>
모든 기능이 구현되지는 않았고, 현재 까지 상품 목록 불러오기, 주문 내역, 재고 내역 불러오기만 구현되었습니다. <br>


## 🕰️ 개발 기간
2022.11.24 ~ 2022.12.05 <br>

## 🪓 개발 스택
### Frontend
<img
  src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"
/>
<img
  src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"
/>
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=flat&logo=styled-components&logoColor=white" />
<img src="https://img.shields.io/badge/recoil-007AF4?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgNjAwIDYwMCI+PGxpbmsgeG1sbnM9IiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUiIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iIi8+PGcgZmlsbD0id2hpdGUiPjxwYXRoIGQ9Ik0xNDIuNTM2IDE5OC44NThjMCAyNi4zNi0yMS4zNjggNDcuNzItNDcuNzIgNDcuNzItMjYuMzYgMC00Ny43MjItMjEuMzYtNDcuNzIyLTQ3LjcyczIxLjM2LTQ3LjcyIDQ3LjcyLTQ3LjcyYzI2LjM1NSAwIDQ3LjcyMiAyMS4zNiA0Ny43MjIgNDcuNzIiLz48cGF0aCBkPSJNNTA1LjE4IDQxNC4yMjVIMjM4LjEyNGMtMzUuMjUgMC02My45MjYtMjguNjc0LTYzLjkyNi02My45MjNzMjguNjc4LTYzLjkyNiA2My45MjYtNjMuOTI2aDEyMC43OGMyMC44MTYgMCAzNy43NTMtMTYuOTM4IDM3Ljc1My0zNy43NTZzLTE2LjkzOC0zNy43NTYtMzcuNzUzLTM3Ljc1Nkg5NC44MWMtNy4yMjcgMC0xMy4wODYtNS44Ni0xMy4wODYtMTMuMDg1IDAtNy4yMjcgNS44Ni0xMy4wODYgMTMuMDg1LTEzLjA4NmgyNjQuMDkzYzM1LjI1IDAgNjMuOTIzIDI4LjY3OCA2My45MjMgNjMuOTI2cy0yOC42NzQgNjMuOTIzLTYzLjkyMyA2My45MjNoLTEyMC43OGMtMjAuODIgMC0zNy43NTYgMTYuOTM4LTM3Ljc1NiAzNy43NiAwIDIwLjgxNiAxNi45MzggMzcuNzUzIDM3Ljc1NiAzNy43NTNINTA1LjE4YzcuMjI3IDAgMTMuMDg2IDUuODYgMTMuMDg2IDEzLjA4NSAwIDcuMjI2LTUuODU4IDEzLjA4NS0xMy4wODUgMTMuMDg1eiIvPjxwYXRoIGQ9Ik00NTcuNDY0IDQwMS4xNDJjMC0yNi4zNiAyMS4zNi00Ny43MiA0Ny43Mi00Ny43MnM0Ny43MiAyMS4zNiA0Ny43MiA0Ny43Mi0yMS4zNiA0Ny43Mi00Ny43MiA0Ny43Mi00Ny43Mi0yMS4zNi00Ny43Mi00Ny43MiIvPjwvZz48c3R5bGUgeG1sbnM9IiIgaWQ9ImRhcmstbW9kZS1jdXN0b20tY29sb3IiPgoJCTpyb290ewoJCQktLWJnLWNvbG9yOnJnYmEoMjYsMjYsMjYsMSk7CgkJCS0tdGV4dC1jb2xvcjpyZ2JhKDExMCwxMTAsMTEwLDEpOwoJCQktLWEtY29sb3I6cmdiYSg5MCwxMjAsMTIwLDEpOwoJCQktLWEtdmlzaXRlZC1jb2xvcjpyZ2JhKDEyMCwxMjAsOTAsMSk7CgkJCS0tYS1ob3Zlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDEpOwoJCQktLWlucHV0LWJvcmRlci1jb2xvcjpyZ2JhKDIxMSwyMTEsMjExLDAuMik7CgkJCS0taW5wdXQtcGxhY2Vob2xkZXItY29sb3I6cmdiYSgxNzMsMjE2LDIzMCwxKTsKCQkJLS1kaWFsb2ctYmctY29sb3I6cmdiYSgzNiwzNiwzNiwwLjk1KTsKCQkJLS1iZy1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNiwyNiwyNiwxKSxyZ2JhKDI2LDI2LDI2LDEpKTsKCQl9Cgk8L3N0eWxlPjwvc3ZnPg==" />

### Backend
<img
  src="https://img.shields.io/badge/node.js-339933?style=flat&logo=node.js&logoColor=white"
/>

## Frontend
### components 폴더
```bash
components
├── Button.tsx
├── Item.tsx
├── ItemInfo.tsx
├── ItemState.tsx
├── LabelBar.tsx
├── Loader.tsx
├── Logo.tsx
├── OrderInfo.tsx
├── OrderItem.tsx
├── Search.tsx
└── Sidebar.tsx
```
컴포넌트의 재사용성을 높이기 위해 최대한 자주 사용되는 UI를 컴포넌트로 만들어 사용하려고 시도하였다.

### screens 폴더
```bash
screens
├── Dashboard.tsx
├── History.tsx
├── Management.tsx
├── Order.tsx
└── Register.tsx
```
screens 폴더 안의 파일들은 각 라우터 별 페이지의 레이아웃과 컴포넌트를 구현한 파일이다.

### 데이터 Fetch
아래는 HTTP API 기능 명세를 참고하여 작성한 데이터 fetching하는 일부 코드이다. <br>
`api.tsx` 파일에 함수를 작성하고 export 하여, 다른 파일에서 import하는 방식으로 재사용할 수 있도록 설계했다.


```ts
//현재 등록되어 있는 상품의 목록 불러오기
export const getProductList = async () => {
  const res = await fetch(`${BASE_URL}/product`);
  return res.json();
};

// 주문내역 불러오기
export const getOrder = async () => {
  const res = await fetch(`${BASE_URL}/order`);
  return res.json();
};

//재고내역 불러오기
export const getStock = async () => {
  const res = await fetch(`${BASE_URL}/stock`);
  return res.json();
};
```

## Backend DB 설계
<img width="400" alt="image" src="https://user-images.githubusercontent.com/68225058/214665139-2e490f3c-5b3f-4cd5-a738-dadf6b584f37.png">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/68225058/214665196-1c1cb464-c34e-410b-8ca6-08fba096f995.png">

## 🪄 결과
github page로 배포되어 있으나, 백엔드 서버를 내린 상태입니다. <br>
프론트엔드 부분만 일부 확인할 수 있습니다.

