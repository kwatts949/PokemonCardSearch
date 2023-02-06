import { useState } from "react";
import axios from "axios";
import Display from "./Display";

const Navbar = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState({
    name: "",
    image: "",
    price: "",
    rarity: "",
  });
  const [pokemonIChooseYou, setPokemonIChooseYou] = useState(false);
  const [pokemonSet, setPokemonSet] = useState("crown*");

  const pokemonSearch = () => {
    console.log(pokemonSet)
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}* set.name:${pokemonSet}`
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
        setPokemonName("");
      });
  };

  return (
    <header>
      <div>
          <h1>Pokemon Card Search App</h1>
          <div className="navbar">   
          <input
            id="input"
            value={pokemonName}
            type="text"
            placeholder="Please enter a card name"
            onChange={(e) => {
              setPokemonName(e.target.value);
            }}
          />  
          <label for="set">Choose a set:</label>

          <select
            name="set"
            id="set"
            onChange={(e) => setPokemonSet(e.target.value)}
          >
            <option value="crown*">Latest Set</option>
            <option value="crown*">Crown Zenith</option>
            <option value="scarlet*">Scarlett and Violet</option>
            <option value="silver*">Silver Tempest</option>
            <option value="origin*">Lost Origin</option>
          </select>
          <button onClick={pokemonSearch}>Search for cards!</button>
          </div>
          <div className="Display">
          {!pokemonIChooseYou ? (
            <h3>Enter a card name</h3>
          ) : (
            <>
              <Display props={pokemonData} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
