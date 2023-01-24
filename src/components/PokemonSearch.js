import axios from "axios";

const PokemonSearch = (props) => {
  axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${props}&orderBy=set.releaseDate`)
}

export default PokemonSearch;
