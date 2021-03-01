import React from "react";

import CharacterCard from "./components/CharacterCard/CharacterCard";
import EpisodesApi from "./api/episodesApi";
import LocationsApi from "./api/locationsApi";
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header items={["Characters", "Episodes", "Locations"]} />
            <CharacterCard />
        </div>
    );
}

export default App;
