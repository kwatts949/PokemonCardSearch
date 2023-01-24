import { useState } from "react";
import axios from "axios";
import Display from "./Display";
import CurrencyConverter from "./CurrencyConverter";

const Navbar = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState("");
  const [pokemonIChooseYou, setPokemonIChooseYou] = useState(false);

  const pokemonSearch = () => {
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}&orderBy=-set.releaseDate`
      )
      //.then((res) => console.log(res))
      .then((res) => {
        setPokemonData({
          name: res.data.data[0].name,
          set: res.data.data[0].set.name,
          image: res.data.data[0].images.small,
          rarity: res.data.data[0].rarity,
          price: res.data.data[0].cardmarket.prices.avg7,
        });
        setPokemonIChooseYou(true);
      });
    console.log(pokemonData);
  };

  return (
    <header>
      <div>
        <div className="navbar">
          <h1>Pokemon Card Search App</h1>
          <input
            type="text"
            placeholder="Please enter a card name"
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
          />
          <button onClick={pokemonSearch}>Search for cards!</button>
          {!pokemonIChooseYou ? (
            <h3>Please select a Pokemon</h3>
          ) : (
            <>
              <Display props={pokemonData} />
            </>
          )}
        </div>
        <div className="Display"></div>
      </div>
    </header>
  );
};

export default Navbar;
