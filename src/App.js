import React from "react";
import "./components/All.css";
import Register from "./components/login/Register";
import {Route, Switch} from "react-router-dom";
import Intro from "./components/intro/Intro";
import Seek from "./components/seek/Seek";
import How from "./components/how/How";
import Login from "./components/login/Login";
import Vegetables from "./components/howlist/Vegetables";
import SingleVege from "./components/ingredients/SingleVege";
import Pasta from "./components/howlist/Pasta";
import SinglePasta from "./components/ingredients/SinglePasta";
import Various from "./components/howlist/Various";
import SingleVarious from "./components/ingredients/SingleVarious";
import SingleRecipe from "./components/singlerecipe/SingleRecipe";
import Groats from "./components/howlist/Groats";
import SingleGroat from "./components/ingredients/SingleGroat";
import RecipesAll from "./components/allrecipes/RecipesAll";
import Sauces from "./components/ingredients/Sauces";
import NavBar from "./components/navbar/Navbar";
import CounterDown from "./components/counterdown/Counterdown";


const App = () => {

    return (
        <div className="all">
            <NavBar />
            <div>
                <Route exact path="/" component={Intro} />
                <Route exact path="/logowanie" component={Login} />
                <Route path="/rejestracja" component={Register} />
                <Switch>
                    <Route exact path="/funkcje/znajdz" component={Seek} />
                    <Route
                        exact
                        path="/funkcje/znajdz/przepisy"
                        component={RecipesAll}
                    />
                    <Route
                        path="/funkcje/znajdz/przepisy/:slug/"
                        component={SingleRecipe}
                    />
                    <Route exact path="/funkcje/jak" component={How} />
                    <Route
                        exact
                        path="/funkcje/jak/warzywa"
                        component={Vegetables}
                    />
                    <Route
                        path="/funkcje/jak/warzywa/:slug"
                        component={SingleVege}
                    />
                    <Route exact path="/funkcje/jak/makarony" component={Pasta} />
                    <Route
                        path="/funkcje/jak/makarony/:slug"
                        component={SinglePasta}
                    />
                    <Route exact path="/funkcje/jak/inne" component={Various} />
                    <Route
                        path="/funkcje/jak/inne/:slug"
                        component={SingleVarious}
                    />
                    <Route exact path="/funkcje/jak/kasze" component={Groats} />
                    <Route path="/funkcje/jak/kasze/:slug" component={SingleGroat}/>
                    <Route exact path="/minutnik" component={CounterDown} />
                    <Route exact path="/funkcje/znajdz/sosy" component={Sauces} />
                </Switch>
            </div>
        </div>
    );
};

export default App;
