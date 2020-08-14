import axios from "axios";

export default (currency, date) => {
  let params = date ? date : "latest";
  if (currency) {
    params += `?base=${currency}`;
  }
  return axios
    .get(`https://api.exchangeratesapi.io/${params}`)
    .then(data => data.data.rates);
};
