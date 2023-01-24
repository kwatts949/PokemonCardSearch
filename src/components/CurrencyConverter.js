import axios from "axios";

const CurrencyConverter = (props) => {
  axios.get("https://api.exchangerate-api.com/v4/latest/EUR").then((res) => {
    let rate = res.data.rates.GBP;
    let total = rate * props.props;

    return total;
  });
};

export default CurrencyConverter;
