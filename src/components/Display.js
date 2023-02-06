import CurrencyConverter from "./CurrencyConverter";

const Display = (props) => {
  console.log(props);
  return (
    <div>
      <div className="display">
        <h3>{props.props.name}</h3>
        <h3>Set: {props.props.set}</h3>
        <h3>Rarity: {props.props.rarity}</h3>
        <CurrencyConverter props={props.props.price} />
      </div>
      <div>
        <img alt="Pokemon Card" src={props.props.image} />
      </div>
    </div>
  );
};

export default Display;
