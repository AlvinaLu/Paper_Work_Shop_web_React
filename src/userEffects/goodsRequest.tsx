import {IGood} from "../components/goods/Goods";

export interface IGoodsRequest{
  id: number;
}
export interface IGoodsResponse{
  status: number;
  arrayGoods?: Array<IGood>;
  errorText?: string;
}


export const goodsRequest = (data: IGoodsRequest): Promise<IGoodsResponse> => {
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  };

  return fetch("/goods", requestOptions)
    .then(res => {
      console.log(res.ok);
      return res.json();
    }, err => err.json());
};