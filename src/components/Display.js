import CurrencyConverter from "./CurrencyConverter";

const Display = (props) => {
  console.log(props);
  return (
    <div className="display">
      <h3>{props.props.name}</h3>
      <h3>Set: {props.props.set}</h3>
      <h3>Rarity: {props.props.rarity}</h3>
      <h3>
        Price €: {props.props.price}
        <CurrencyConverter props={props.props.price} />
      </h3>
      <img src={props.props.image} />
    </div>
  );
};

export default Display;
