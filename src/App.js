import React from "react";

import CharacterCard from "./components/CharacterCard/CharacterCard";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { Switch, Route } from "react-router-dom";

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={CharacterCard} />
            <Route exact path="/bookmarks" component={Bookmarks} />
        </Switch>
    </div>
);

export default App;
