import CurrencyConverter from "./CurrencyConverter";

const Display = (props) => {
  console.log(props);
  return (
    <div className="display">
      <h3>{props.props.name}</h3>
      <h3>Set: {props.props.set}</h3>
      <h3>Rarity: {props.props.rarity}</h3>
      <CurrencyConverter props={props.props.price}/>
      <img alt='Pokemon Card' src={props.props.image} />
    </div>
  );
};

export default Display;
