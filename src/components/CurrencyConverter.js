import axios from "axios";
import { useState } from "react";

const CurrencyConverter = (props) => {
  const [gbpTotal, setGbpTotal] = useState("");

  axios
    .get("https://api.exchangerate-api.com/v4/latest/EUR")
    .then((res) => setGbpTotal(res.data.rates.GBP * props.props));
  return (
    <div className="display">
      <h3>Price £{gbpTotal}</h3>
    </div>
  );
};

export default CurrencyConverter;
