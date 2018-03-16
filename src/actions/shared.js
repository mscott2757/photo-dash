
export function errHandler(err) {
  console.log(err.response);
}

export function resHandler(res) {
  return res.data;
}

export const axiosConfig = { withCredentials: true }
