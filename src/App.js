import React from "react";

import CharactersApi from "./api/charactersApi"
import EpisodesApi from "./api/episodesApi"
import LocationsApi from "./api/locationsApi"

function App() {
    return (
        <div>
            Characters:
            <CharactersApi />
            Episodes:
            <EpisodesApi />
            Locations:
            <LocationsApi />
        </div>
  );
}

export default App;
