import axios from "axios";
import { useState } from "react";

const CurrencyConverter = (props) => {
  const [gbpTotal, setGbpTotal] = useState(0);

  axios
    .get("https://api.exchangerate-api.com/v4/latest/EUR")
    .then((res) => setGbpTotal(res.data.rates.GBP * props.props));
  return (
      <h3>Price £{gbpTotal.toFixed(2)}</h3>
  );
};

export default CurrencyConverter;
