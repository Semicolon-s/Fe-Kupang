const BASE_URL = "http://54.235.46.155:3000";

export interface IProduct {
  productId: number;
  productName: string;
  imgUrl: string | null;
}

export interface IProductList {
  statusCode: number;
  message: "상품 목록 불러오기";
  data: IProduct[];
}

export interface IOrderList {
  statuscode: number;
  message: string;
  data?: IOrder[] | null;
}
export interface IOrder {
  orderId: number;
  productId: number;
  productName: string;
  orderNum: number;
  buyer: string;
  phonenumber: string;
  address: string;
  orderState: number;
  orderDate: string;
}

export interface IStock {
  stockId: number;
  stockNum: number;
}

export interface IStockList {
  statuscode: number;
  message: "상품검색 성공";
  data: IStock[];
}

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

// export const getCoinInfo = async (coinId: string) => {
//   return (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
// };

// export const getCoinPrice = async (coinId: string) => {
//   return (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
// };

// export const getOhlcvByCoin = async (coinId: string) => {
//   const response = await fetch(
//     `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
//   );
//   if (!response.ok) {
//     return Promise.reject(new Error("fail"));
//   } else {
//     return response.json();
//   }
// };
