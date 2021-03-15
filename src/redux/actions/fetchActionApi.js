import axios from "axios";
import { setCharactersCard } from "./charactersCardActions";

const getCharactersData = ({ page }) => (dispatch) => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`).then(({ data }) => {
        dispatch(setCharactersCard(data.results));
    });
};

export default getCharactersData;
