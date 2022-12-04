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

// export const getProductList = async () => {
//   const res = await fetch(`${BASE_URL}/product`);
//   return res.json();
// };

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
