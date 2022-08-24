export interface IUserSignOutRequest{
  sessionId: string;

}
export interface IUserSignOutResponse{
  status: number;
  sessionId?: string;
  errorText?: string;
}


export const signOut = (data: IUserSignOutRequest): Promise<IUserSignOutResponse> => {
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  };

  return fetch("/signOut", requestOptions)
    .then(res => {
      console.log(res.ok);
      return res.json();
    }, err => err.json());
};
