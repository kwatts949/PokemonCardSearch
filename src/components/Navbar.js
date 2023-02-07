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
    // console.log(pokemonSet);
    setPokemonData({ name: "", image: "", price: "", rarity: "" });
    axios
      .get(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}* set.name:${pokemonSet}`
      )
      //.then((res) => console.log(res.data.data.length))
      .then((res) => {
        res.data.data.length === 0 ? (
          <div>try a different combo</div>
        ) : (
          setPokemonData({
            name: res.data.data[0].name,
            set: res.data.data[0].set.name,
            image: res.data.data[0].images.small,
            rarity: res.data.data[0].rarity,
            price: res.data.data[0].cardmarket.prices.avg7,
          })
        );
        setPokemonIChooseYou(true);
        setPokemonName("");
        // console.log(pokemonData);
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

          <select
            name="set"
            id="set"
            onChange={(e) => setPokemonSet(e.target.value)}
            required
          >
            <option value="crown*">Latest Set</option>
            <option value="crown*">Crown Zenith</option>
            <option value="scarlet*">Scarlett and Violet</option>
            <option value="silver*">Silver Tempest</option>
            <option value="origin*">Lost Origin</option>
            <option value="astral*">Astral Radiance</option>
            <option value="brilliant*">Brilliant Stars</option>
            <option value="fusion*">Fusion Strike</option>
            <option value="go*">Pokemon Go!</option>
          </select>
          <button onClick={pokemonSearch}>Search for cards!</button>
        </div>
        <div className="Display">
          {!pokemonIChooseYou ? (
            <h3>Enter a card name</h3>
          ) : pokemonData.image === "" ? (
            <h3>No results found, try a different combo</h3>
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
