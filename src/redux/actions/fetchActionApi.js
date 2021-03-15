import axios from "axios";
import { setCharactersCard } from "./charactersCardActions";

const getCharactersData = (url) => async (dispatch) => {
    axios.get(url).then(({ data }) => {
        dispatch(setCharactersCard(data.results));
    });
};

export default getCharactersData;
